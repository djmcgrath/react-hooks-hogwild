import React, {useState} from "react";
import PigCard from "./PigCard";

export default function PigTile ({hogs}) {
    const [isGreased, setisGreased] = useState(false)	

    function handleGreased () {
        setisGreased(!isGreased)
        function displayHogs () {
            const greasedHogs = hogs.filter(pigGreased)
    
            function pigGreased (pig) {
                return pig.greased === true
            }
            return greasedHogs
        }
        return displayHogs
    }

   
return (
    <div className="porkers">
        <label>Greased?</label>
		<input type="checkbox" onClick={handleGreased}/>
        {hogs.map((pig, index) => (
            <PigCard key={index} pig={pig} displayHogs/>
        ))}     
    </div>
)
    
}

