function Filter({handleGreased, sortNameWeight}) {

	return (
		<div >
            <select onChange={(event)=>handleGreased(event)}>
                <option>All</option>
                <option>Greased</option>
                <option>No Greased</option>
            </select>
            <select onChange={(event) => sortNameWeight(event)}>
                <option>Name</option>
                <option>Weight</option>
            </select>

		</div>
	);
}

export default Filter;