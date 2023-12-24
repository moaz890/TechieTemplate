

export default function Feature(props) {

    return (
        <div key={props.id} className="row feature">
            <div className="col-2 feature--icon"><i className={props.icon}></i></div>
            <div className="col-10 feature--info">
                <h4 className="display-3">{props.head}</h4>
                <p className="lead">{props.body}</p>
            </div>
        </div>
    );

}