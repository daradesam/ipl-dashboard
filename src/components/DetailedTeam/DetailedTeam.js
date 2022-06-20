import './DetailedTeam.css';
import { useParams } from 'react-router';
import PlayerCard from '../PlayerCard/PlayerCard';

export default function DetailedTeam({data}){
    const {teamID} = useParams();

    const singleTeam = data.filter((team) => {
        return team.id == teamID;
    })
    console.log(singleTeam)
    return(
        <div className='detailed-team-wrapper'>
            {singleTeam.map((team)=>(
                <>
                    <div className='title-wrapper'>
                        <img src={team.image} alt={team.title}/>
                        <h1>{team.title}</h1>
                    </div>
                    <h2>Squad</h2>
                    <div className='players-card-wrapper'>
                        {team.playing11.map((player)=>{
                            return <PlayerCard player={player}/>
                        })}
                    </div>
                </>
            ))}
        </div>
    )
}