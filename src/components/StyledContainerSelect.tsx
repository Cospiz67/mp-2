import styled from "styled-components";
import type {DriversType} from "../types/DriversType.tsx";

const StyledSelect = styled.div`
    text-align: center;
    margin-bottom: 2%;
`

export default function StyledContainerSelect(props:{data: DriversType[], value:string, func: React.Dispatch<React.SetStateAction<string>>}){
    let teamList:string[] = ["All"];
    props.data.map((driver)=>{
                if(teamList.includes(driver.teamId) === false)
                    teamList.push(driver.teamId);
            });
    
    return(
            <StyledSelect>
                <label>Choose a team:</label>
                <select name="selectedTeam" id="team-select"
                        value={props.value}
                        onChange={e => {
                        props.func(e.target.value);
                        }}>
                        {
                            teamList.map((team)=>
                            {
                                return (
                                    <option key={team} value={team}>{team}</option>
                                )
                            })
                        }
                </select>
            </StyledSelect>

        
    )

}
