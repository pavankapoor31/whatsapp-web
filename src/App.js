import styled from 'styled-components';
import Contacts from './components/Contacts';
import Conversations from './components/Conversations';
import { useState } from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background: #f8f9fb;
`;
function App() {
  const [activeUserId, SetActiveUserId] = useState(1);
  return (
    <>
      <Container>
        <Contacts
          activeUserId={activeUserId}
          SetActiveUserId={SetActiveUserId}
        />
        <Conversations
          activeUserId={activeUserId}
          SetActiveUserId={SetActiveUserId}
        />
      </Container>
    </>
  );
}

export default App;
