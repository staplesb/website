import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
