import React from "react";

const Scroll = (props) => {
  return (
    /* must camelCase for JSX for styling*/
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid #a9fbfb",
        height: "500px",
      }}>
      {props.children}
    </div>
  );
};
//Props
//State
//Children => so it can wrap something in it it <scroll><CardList robots={filteredRobots} /></scroll>
export default Scroll;
