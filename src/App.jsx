import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Timer from "./pages/Timer.jsx";
import Alarm from "./pages/Alarm.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/alarm" element={<Alarm />} />
      </Routes>
    </Router>
  );
}

export default App;
