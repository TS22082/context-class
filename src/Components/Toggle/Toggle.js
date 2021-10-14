import React, { useContext } from "react";
// import ThemeContext

const Toggle = () => {
  // grab values from global state

  const styles = {
    toggleContainer: {
      height: "50px",
      width: "100px",
      backgroundColor: darkMode === true ? "#CA007A" : "#42a5f5",
      marginRight: "20px",
      borderRadius: "25px",
    },

    toggleInner: {
      transition: "margin-left .2s ease-in-out",
      cursor: "pointer",
      height: "50px",
      width: "50px",
      backgroundColor: "grey",
      borderRadius: "100%",

      // use a terniary expression to make margin-left 50px if true else 0px
      marginLeft: 
    },
  };

  return (
    <div style={styles.toggleContainer}>
      <div
        // add an onClick that toggles darkMode
        style={styles.toggleInner}
      ></div>
    </div>
  );
};

export default Toggle;

// ### #                        ##      #   #  #
//  #  ### ### ###  ##  ##     #   ###     ### ###
//  #  # # # # ### # #  #       #  ###  #   #  # #
//  #  # # ### # # ### ##        # # #  ##  ## # #
//  #                          ##
