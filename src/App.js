import "./App.css";
import Footer from "./component/layout/footer";
import Navbar from "./component/layout/navbar";
import Routes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
