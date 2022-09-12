const User = require("../models/User");
const {
  tokenVerification,
  tokenVerificationAndAuthorization,
  tokenVerificationAndAdmin,
} = require("./tokenVerification");

const router = require("express").Router();

// GET USER
router.get("/find/:id", tokenVerificationAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET ALL USERS
router.get("/", tokenVerificationAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(3)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", tokenVerificationAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE

router.delete("/:id", tokenVerificationAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
