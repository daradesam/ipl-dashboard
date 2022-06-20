import './PlayerCard.css'

export default function PlayerCard({player}){
    return(
        <div className="player-card-wrapper">
            <h3>{player.name}</h3>
            <h4>{player.country}</h4>
        </div>
    )
}