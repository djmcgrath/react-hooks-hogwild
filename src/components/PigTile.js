import React, {useState} from "react";
import PigCard from "./PigCard";
import Filter from "./Filter";

export default function PigTile ({hogs}) {
    const [isGreased, setisGreased] = useState("All")
    const [isSort, setIsSort] = useState("Name")

    function handleGreased (event) {
        setisGreased(event.target.value)
    }
    
    function sortNameWeight (event) {
        setIsSort(event.target.value)
    } 

    const sortedHogsgreasedHogs = hogs.filter(pigGreased)

    function pigGreased (pig) {
        if (isGreased === "All") {
            return true
        }else if (isGreased === "Greased"){
            return pig.greased 
        }else{
            return !pig.greased
        }
    }

    const sortedHogs = sortedHogsgreasedHogs.sort((hog1, hog2) => {
        if (isSort === "Weight"){
            return hog1.weight - hog2.weight
        }else {
            return hog1.name.localeCompare(hog2.name)
        }
    })
    
return (
    <div className="porkers">
        <Filter handleGreased={handleGreased} sortNameWeight={sortNameWeight} />
        {sortedHogs.map((pig, index) => (
            <PigCard key={index} pig={pig} />
        ))} 
    </div>
)
    
}

