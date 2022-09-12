import styled from "styled-components";
import { mobile } from "../MediaQuery";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "23vh" })}
`;

const Stats = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #ffffff;
  background-color: rgba(-40, 40, 40, 0.3);
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 33px;
  text-align: center;
  opacity: 0.7;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: -70px;
`;

const DisplayedItems = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Stats>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Stats>
      </Link>
    </Container>
  );
};

export default DisplayedItems;
