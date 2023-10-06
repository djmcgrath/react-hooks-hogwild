import React, {useState} from "react";


export default function PigCard({ pig }) {
    const [displayInfo, setdisplayInfo] = useState(false)

    function handleInfo () {
        setdisplayInfo(!displayInfo)
    }

    return (
        <div className="pigTile" onClick={handleInfo}>
            <h3>{pig.name}</h3>
            <img width={250} src={pig.image} alt="Pig pics"></img>
        { displayInfo ? <div>
            <p>Specialty: {pig.specialty}</p>
            <p>Weight: {pig.weight}</p>
            <p>Greased: {pig.greased ? "Greased" : "UnGreased"}</p>
            <p>Highest Medal Achieved: {pig["highest medal achieved"]}</p>
        </div> : null}
        </div>

    )
}