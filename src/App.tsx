import "./App.css";
import Head from "./components/Head";
import What from "./components/What";
import Footer from "./components/Footer";
function App() {
	return (
		<div>
			<div className="flex justify-center  h-screen mt-10">
				{/* <div className="w-2/5 border border-gray-300 p-4"> */}
				<div className="lg:w-2/5 md:w-3/6 sm:w-4/6  p-4 ">
					<Head />
					<What />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
