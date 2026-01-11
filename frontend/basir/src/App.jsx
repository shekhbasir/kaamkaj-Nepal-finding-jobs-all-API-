import Nav from "./allshared/Nav";
import Home from "./allshared/Home";
import Login from "./allshared/Login";
import Signup from "./allshared/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "./allshared/Jobs";
import Browse from "./allshared/Browse";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/Browse" element={<Browse />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
