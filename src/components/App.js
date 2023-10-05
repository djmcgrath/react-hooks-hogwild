import Nav from "./Nav";
import PigTile from "./PigTile";

import hogs from "../porkers_data";

function App() {

	return (
		<div className="App">
			<Nav />
			<PigTile hogs={hogs}/>
		</div>
	);
}

export default App;
