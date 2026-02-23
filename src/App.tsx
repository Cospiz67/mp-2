import { useEffect, useState } from 'react';
import Driver from './components/Driver.tsx';
import type {DriversType} from "./types/DriversType.tsx";
import {Wrapper} from './components/Wrapper.tsx';
import { StyledContainer} from './components/StyledContainer.tsx';
import Bar from './components/Bar.tsx';
import StyledContainerSelect from './components/StyledContainerSelect.tsx';

export default function App() {
  const [data, setData] = useState<DriversType[]>([]);
  const [selectedTeam, setSelectedTeam] = useState("All");

  useEffect( ()=>{
    async function fetchData(){
      const res = await fetch("https://f1api.dev/api/current/drivers");
      const results = await res.json();
      setData(results.drivers);
    }
    fetchData()
      .then(()=> console.log("all good"))
      .catch((e)=> console.log("error: " +e));

    }, [data.length]);
  
  useEffect( ()=>{
    async function fetchData(){
      const res = await fetch("https://f1api.dev/api/current/drivers");
      const results = await res.json();
      setData(results.drivers);
    }
    fetchData()
      .then(()=> console.log("team has changed"))
      .catch((e)=> console.log("error: " +e));

    }, [selectedTeam]);
  return(
      <StyledContainer>
        <Bar/>
        <StyledContainerSelect data={data} value={selectedTeam} func={setSelectedTeam}/>
        <Wrapper>
          <Driver data={data} selectedTeam ={selectedTeam}/>
        </Wrapper>
      </StyledContainer>
  )
}

