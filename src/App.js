import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/header';

// Styles
import "./styles/header.css";

//Screens
import Home from './screens/Home';


function App() {
  return (
    <div className='appMain-container'>
      <div className='mainHeader-container'>
        <Header />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
