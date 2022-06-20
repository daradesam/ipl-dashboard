import './TeamsInfo.css'
import Data from "../../Data/Data"
import SingleTeam from "../SingleTeam/SingleTeam"

export default function TeamsInfo(){
    return (
        <div className='teams-info-wrapper'>
            <h1>Read more about your favourite team</h1>
            <div className="team-cards-wrapper">
                {Data.map((team)=>{
                    return <SingleTeam team={team} key={team.id}/>
                })}
            </div>
        </div>
    )
}