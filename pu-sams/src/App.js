import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='flex justify-center'>
				<Logo />
			</main>
			<footer></footer>
		</>
	);
}

export default App;
