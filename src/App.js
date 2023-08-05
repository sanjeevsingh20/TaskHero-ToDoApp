import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Notestate from "./Context/notes/Notestate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./components/Front";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Verify from "./components/Verify";
import Reset from "./components/Reset";
import { Suspense } from "react";
import Notfound from "./components/Notfound";
function App() {
  let Token;
  if (localStorage.getItem("Token")) {
    Token = true;
  } else {
    Token = false;
  }
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Notestate>
        <div className="App">
          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Front />}></Route>
              <Route
                exact
                path="/home"
                element={Token ? <Home /> : <Notfound />}
              ></Route>
              <Route exact path="/About" element={<About />}></Route>
              <Route
                exact
                path="/signup"
                element={Token ? <Front /> : <Signup />}
              ></Route>
              <Route
                exact
                path="/login"
                element={Token ? <Front /> : <Login />}
              ></Route>
              <Route exact path="/profile" element={<Profile />}></Route>

              <Route
                exact
                path="/Reset_password"
                element={Token ? <Front /> : <Verify />}
              ></Route>
              <Route
                exact
                path="/update_password"
                element={Token ? <Front /> : <Reset />}
              ></Route>
              <Route path="*" element={<Notfound />}></Route>
            </Routes>
            <Footer />
          </Router>
        </div>
      </Notestate>
    </Suspense>
  );
}

export default App;
