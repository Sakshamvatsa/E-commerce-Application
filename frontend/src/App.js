import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route}from "react-router-dom"
import './App.css';
import Footer from "./Components/footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  return (
    <Router>
    <Header/>
    <main className="my-3">
    <Container>
    <h1>Ecommerce App</h1>
    {/* <Route path="/" Component={HomeScreen} exact /> */}
    <HomeScreen/>
    </Container>
    </main>
    
    <Footer/>
      
      
    </Router>
  );
}

export default App;
 
