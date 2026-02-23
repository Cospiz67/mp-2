import type {DriversType} from "../types/DriversType.tsx";
import styled from "styled-components";

const DriverCard = styled.div`
  background-color: #1E3A8A;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  margin: 3%;
  text-align: center;
  max-width:80%;
  border-radius: 15px;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
`;

const StyledH1 = styled.h1`
  font: calc(2px + 1.5vw) "Lucida Console", "Courier New", monospace;
`
const StyledP = styled.p`
  font: calc(2px + 1vw)"Lucida Console", "Courier New", monospace;
  padding: 1%;
`
const StyledImg = styled.img`
  max-width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid white;
`

function getDriverImage(driverId: string){
  return "../src/assets/" + driverId +".jpg";
}


export default function Driver(props:{data: DriversType[], selectedTeam: string})
{
    return (
    <>
      {
        props.data.map((driver)=>
        {
          if(props.selectedTeam ==="All" || props.selectedTeam === driver.teamId)
          {
            return (
                <DriverCard key= {driver.driverId}>
                  <StyledH1>{driver.name} {driver.surname}</StyledH1>
                  <StyledP>Driver Number: {driver.number}</StyledP>
                  <StyledP>Shortname: {driver.shortName}</StyledP>
                  <StyledP>Team: {driver.teamId}</StyledP>
                  <StyledImg src={getDriverImage(driver.driverId)} alt={driver.driverId}
                    onError={(e) => {
                      e.currentTarget.src = "../src/assets/default.png";
                    }}></StyledImg>
                </DriverCard>
            )
          }
        })
      }
    </>
  )

}
