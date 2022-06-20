import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DetailedTeam from './components/DetailedTeam/DetailedTeam';
import MainPage from './components/MainPage/MainPage';
import Data from './Data/Data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/:teamID' element={<DetailedTeam data={Data}/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
