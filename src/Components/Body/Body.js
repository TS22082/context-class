import React from "react";
import Card from "../Card/Card";

const Body = () => {
  const styles = {
    mainStyles: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.mainStyles}>
      <Card />
    </div>
  );
};

export default Body;
