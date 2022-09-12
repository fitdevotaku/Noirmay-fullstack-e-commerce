import styled from "styled-components";
import DisplayedItems from "./DisplayedItems";
import { displayed } from "../data";
import { mobile } from "../MediaQuery";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Displayed = () => {
  return (
    <Container>
      {displayed.map((item) => (
        <DisplayedItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Displayed;
