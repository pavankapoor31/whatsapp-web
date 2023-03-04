import styled from 'styled-components';
import Contacts from './components/Contacts';
import Conversations from './components/Conversations';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background: #f8f9fb;
`;
function App() {
  return (
    <>
      <Container>
        <Contacts />
        <Conversations/>
      </Container>
    </>
  );
}

export default App;
