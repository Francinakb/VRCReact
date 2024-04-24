import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js"
import ListItems from "./Components/ListItems/ListItems.js";
import NavBar2 from "./Components/NavBar2/NavBar2.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBar2/>
      <ListItems />
    </div>
  );
}

export default App;
