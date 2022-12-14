import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename="/React_practice">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/hello" element={<h1>HELLO WORLD</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
