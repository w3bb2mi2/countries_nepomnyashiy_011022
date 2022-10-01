
import './App.css';
import { Header } from './component/Header';
import { Main } from './component/Main';
import { Route, Routes } from "react-router-dom"
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { useState } from 'react';



function App() {
  const [countries, setCountries] = useState([])

 

  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}/>} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>

    </div>
  );
}

export default App;
