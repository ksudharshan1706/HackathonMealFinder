import Navbar from "./componants/Navbar";
import ViewDishes from "./componants/ViewDishes";
import logo from "./logo.svg";
import "./app.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <ViewDishes />
    </div>
  );
}

export default App;
