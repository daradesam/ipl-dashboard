import './SingleTeam.css';
import {Link} from 'react-router-dom';

export default function SingleTeam({ team }) {
    return (
        <Link to={`/${team.id}`}>
            <div className="single-team-wrapper" style={{ backgroundColor: `${team.bg}` }}>
                <img src={team.image} />
                <h1>{team.title}</h1>
            </div>
        </Link>
    )
}