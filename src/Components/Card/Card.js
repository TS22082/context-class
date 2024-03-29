import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

const Card = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const styles = {
    cardContainerStyle: {
      height: "500px",
      width: "500px",
      borderRadius: "25px",
      border: ".5px grey solid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

       // use a terniary expression to make color white if darkMode is true else black
      color: 
    },
  };

  return (
    <div style={styles.cardContainerStyle}>
      <h2>Dark mode makes happy developers</h2>
    </div>
  );
};

export default Card;
