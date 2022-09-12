import { ArrowRightOutlined, ArrowLeftOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { switchItems } from "../data";
import { useState } from "react";
import { mobile } from "../MediaQuery";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Pointer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.switchIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
  width: 50vh;
`;

const DataContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Details = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
`;

const Switch = () => {
  const [switchIndex, setSwitchIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSwitchIndex(switchIndex > 0 ? switchIndex - 1 : 2);
    } else {
      setSwitchIndex(switchIndex < 2 ? switchIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Pointer direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Pointer>
      <Wrapper switchIndex={switchIndex}>
        {switchItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <DataContainer>
              <Title>{item.title}</Title>
              <Details>{item.details}</Details>
              <Button>SHOP NOW</Button>
            </DataContainer>
          </Slide>
        ))}
      </Wrapper>
      <Pointer direction="right" onClick={() => handleClick("left")}>
        <ArrowRightOutlined />
      </Pointer>
    </Container>
  );
};

export default Switch;
