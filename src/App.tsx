import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logos from "./pages/Logos";
import Landing from "./pages/Landing";
import Showcase from "./pages/Showcase";

import SEO from "./components/SEO";

function App() {
	return (
		<BrowserRouter>
			<SEO />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="logos" element={<Logos />} />
				<Route path="showcase" element={<Showcase />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
