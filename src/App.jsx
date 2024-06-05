import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Timer from "./pages/Index.jsx";
import AlarmClock from "./pages/AlarmClock.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Timer />} />
          <Route path="/alarm" element={<AlarmClock />} />
        </Routes>
      </Routes>
    </Router>
  );
}

export default App;
