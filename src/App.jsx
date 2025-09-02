import "./App.css";
import Header from "./components/Header";
import Stok from "./components/Stok";
// import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Stok />
        {/* <Hero /> */}
        {/* <h1 className="text-amber-700 text-5xl">Hello World</h1> */}
      </div>
    </>
  );
}

export default App;
