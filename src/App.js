import { useEffect, useState } from 'react';
import './App.css';
import { Control } from './component/Controls';
import { Header } from './component/Header';
import { Main } from './component/Main';
import axios from "axios"
import { ALL_COUNTRIES } from './config';



function App() {
const [countries, setCountries] = useState([])
useEffect(()=>{
  axios.get(ALL_COUNTRIES)
    .then(res=>setCountries(res.data))
},[])
  return (
    <div>
      <Header/>
      <Main>
        <Control/>
      </Main>
    </div>
  );
}

export default App;
