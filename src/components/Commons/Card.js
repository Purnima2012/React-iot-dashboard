import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card" >
            
                <img src={props.imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text">{props.title}</h5>
                        <p className="card-text">{props.details}</p>
                        <Link className='nav-btn' to={props.targetPage}> {props.navText} </Link>
                    </div>
                {props.showRemoveBtn && <button className="remove-btn" onClick={props.removeCard}>REMOVE</button> }
        </div>
    )

}

export default Card