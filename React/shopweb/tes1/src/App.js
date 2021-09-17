import Header from "./components/Header";
import Prototype from "./components/Prototype";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Prototype />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
