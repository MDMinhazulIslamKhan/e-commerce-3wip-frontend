import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Errorpage from "./pages/Error.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Errorpage/>
      <Footer />
    </>
  );
}

export default App;
