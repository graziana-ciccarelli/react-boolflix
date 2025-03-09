import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
      <GlobalProvider>
       <Header />  
       <Main />
      </GlobalProvider> 
      
    </>
  );
}

export default App;
