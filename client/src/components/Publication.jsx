import styled from "styled-components";

const Container = styled.div`
  height: 33px;
  background-color: #faebd7;
  color: #000000;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Publication = () => {
  return (
    <Container>
      #1 brand for infants and kids. Free Shipping on Orders Over $150
    </Container>
  );
};

export default Publication;
