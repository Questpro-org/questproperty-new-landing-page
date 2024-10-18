import { useRef } from "react";
import "./App.css";
import Footer from "./component/layout/footer";
import Navbar from "./component/layout/navbar";
import Routes from "./routes";


function App() {
  const footerRef = useRef(null);
  return (
    <>
      <Navbar footerRef={footerRef} />
      <Routes />
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
