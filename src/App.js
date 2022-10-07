import styled from "styled-components";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import bgImg from "./assets/bg.png";

function App() {
  return (
    <Wrapper>
      <SideBar />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
export default App;
