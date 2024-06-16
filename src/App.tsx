import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logos from "./pages/Logos";
import Landing from "./pages/Landing";
import Showcase from "./pages/Showcase";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="logos" element={<Logos />} />
				<Route path="showcase" element={<Showcase />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
