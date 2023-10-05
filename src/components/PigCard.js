import React, {useState} from "react";


export default function PigCard({ pig }) {
    const [displayInfo, setdisplayInfo] = useState(false)

    function handleInfo () {
        setdisplayInfo(!displayInfo)
    }

    return (
        <div className="pigTile" onClick={handleInfo}>
            <h3>{pig.name}</h3>
            <img src={pig.image}></img>
        { displayInfo ? <div>
            <p>{pig.specialty}</p>
            <p>{pig.weight}</p>
            <p>{pig.greased ? "Greased" : "UnGreased"}</p>
            <p>{pig["highest medal achieved"]}</p>
        </div> : null}
        </div>

    )
}