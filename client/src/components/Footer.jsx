import {
  Instagram,
  Pinterest,
  Facebook,
  Twitter,
  MailOutline,
  Room,
  Phone,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../MediaQuery";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Image = styled.img`
  width: 100px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 20px;
  height: 40px;
  border-radius: 50%;
  color: #000000;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const FootLinks = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: -10px;
  ${mobile({ padding: "40px" })}
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactList = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Image src="../noirmay-word-logo33.png" />
        </Logo>
        <SocialContainer>
          <SocialIcon>
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://www.facebook.com/">
              <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://www.twitter.com/">
              <Twitter />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://www.pinterest.com/">
              <Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        <p>&copy; 2022 Noirmay</p>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <Links>
          <FootLinks>Home</FootLinks>
          <FootLinks>My Account</FootLinks>
          <FootLinks>Latest Release</FootLinks>
          <FootLinks>Infants</FootLinks>
          <FootLinks>Big Kids</FootLinks>
          <FootLinks>Accessories</FootLinks>
          <FootLinks>WishList</FootLinks>
          <FootLinks>Cart</FootLinks>
          <FootLinks>Terms</FootLinks>
        </Links>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactList>
          <Room style={{ marginRight: "10px" }} />
          P. Sherman, 42 Wallaby Way, Sydney
        </ContactList>
        <ContactList>
          <Phone style={{ marginRight: "10px" }} />
          Give us a call +1 234 567 8910
        </ContactList>
        <ContactList>
          <MailOutline style={{ marginRight: "10px" }} />
          support@noirmay.com
        </ContactList>
      </Right>
    </Container>
  );
};

export default Footer;
