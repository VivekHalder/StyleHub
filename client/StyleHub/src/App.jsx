import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home, Cart, Login, SignUp, LandingPage } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<><Header /><Home /></>} /> */}
          <Route path="/" element={<><LandingPage/></>} />
          <Route path="/cart" element={<><Header /><Cart /></>} />
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <SignUp/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;