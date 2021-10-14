//import useContext from react
import { useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Nav from "./Components/Nav/Nav";
// import your theme provider

function App() {
  // create the "blueprint" for global state here

  const styles = {
    containerStyles: {
      // use a terniary expression to make backgroundColor black
      // if darkMode is true else white
      backgroundColor: ,
      height: "100vh",
    },
  };

  return (
    <div style={styles.containerStyles}>
      <Nav></Nav>
      <Body />
    </div>
  );
}

export default App;
