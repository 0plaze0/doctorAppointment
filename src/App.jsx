import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Main from "./components/Main/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
