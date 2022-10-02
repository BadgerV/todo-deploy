import Homepage from "./pages/homepage/Homepage";
import styled from 'styled-components'

const Container = styled.div`
  height : 100vh;
  width : 100vw;
  background-color:#e3e3e3 ;
  display : flex;
  justify-content: center;
  align-items: center;
`


function App() {
  return (
    <Container>
      <Homepage />
    </Container>
  );
}

export default App;
