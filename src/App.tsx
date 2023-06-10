import React from 'react';
import Header from './components/Headers';
import Features from './components/Features';
import Highlights from './components/Highlights';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box bg="brand.aliceBlue">
        <Header />
        <Features />
        <Highlights />
      </Box>
    </div>
  );
}

export default App;
