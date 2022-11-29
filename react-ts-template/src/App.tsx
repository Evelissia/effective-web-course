import { FC } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import Header from './components/Header/index'
import Footer from './components/Footer/index';

const App = () => {
  return (
    <div>
        <Header />
        <Footer />
    </div>
    
  );
}

export default App
