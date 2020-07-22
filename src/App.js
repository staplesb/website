import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Routing from "./components/routing";
import Footer from "./components/footer";
import { Container } from "reactstrap";

function App() {
  return (
    <div>
      <Routing />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
