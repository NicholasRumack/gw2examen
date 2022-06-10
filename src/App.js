import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Composition from "./pages/Composition";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
  <div>
	<Navbar/>
		<Container className="justify-content-center"> 
		<Header />
		<Routes>
			<Route path="/" element= {<Home />} />
			<Route path="/Composition" element= {<Composition />} />
		</Routes>
		<Footer/>
	</Container>
  </div>
  );
}

export default App;
