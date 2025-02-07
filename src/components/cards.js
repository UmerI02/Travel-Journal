export default function cards(props){
    return(
        <div className="cards">
            <div className="card">
                <div className="card-image">
                <img src={props.image}/>
                </div>
                <div className="card-details">
                <i className="fa fa-map-marker"></i>&nbsp;<span id="location">{props.location}</span>&nbsp;
                <a href={props.maps}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <h3>{props.date}</h3>
                <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}