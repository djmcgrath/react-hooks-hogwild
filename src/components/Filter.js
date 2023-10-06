function Filter({handleGreased, sortNameWeight}) {

	return (
		<div >
            <select onChange={(event)=>handleGreased(event)}>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Dry">Not Greased</option>
            </select>
            <select onChange={(event) => sortNameWeight(event)}>
                <option>Name</option>
                <option>Weight</option>
            </select>
		</div>
	);
}

export default Filter;