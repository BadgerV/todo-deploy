import styled from "styled-components";
import ListItem from "../../components/listItem/ListItem";
import Searchbar from "../../components/searchbar/Searchbar";

const Container = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.h1`
  margin-top: 3px;
  font-size: 30px;
  color: #3e3e3e;
  font-family: cursive;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 90%;

  overflow-y: scroll;
`;
const Homepage = () => {
  return (
    <Container>
      <Logo>Todo List App</Logo>
      <Searchbar />
      <ListContainer>
        <ListItem />
      </ListContainer>
    </Container>
  );
};

export default Homepage;
