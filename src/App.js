
import './App.css';
import { Header } from './component/Header';
import { Main } from './component/Main';
import { Route, Routes } from "react-router-dom"
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { useEffect, useState } from 'react';
import { ALL_COUNTRIES } from './config';
import axios from 'axios';



function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    console.log("useEffect works")
    axios.get(ALL_COUNTRIES)
      .then(({ data }) =>
        setCountries(data)
      )

  }, [])

  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage
            countries={countries}
            setCountries={setCountries}
            filteredCountries={filteredCountries}
            setFilteredCountries={setFilteredCountries}
          />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
