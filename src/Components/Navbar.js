import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="header">Curd Task</h1>
      <div className="button">
        <button className="active btns">Table View</button>
        <button className="btns">Card View</button>
      </div>
    </div>
  );
}

export default Navbar;
