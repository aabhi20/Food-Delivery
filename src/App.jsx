import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FoodDetail from "./pages/FoodDetail";

function App() {
  return (
    <div className="bg-[#fff9ec] min-h-screen">
      <Header />
      <Home/>
      <Navbar />
    </div>
  );
}

export default App;
