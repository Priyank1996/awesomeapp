import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Sdata from "./Sdata";
import "./index.css";

function Ncard(val, ind, arr) {
  return (
    <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}
function Merge() {
  return (
    <>
      <h1 className="heading_style">My top 5 netflix Series</h1>
      {Sdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
}

ReactDOM.render(<Merge />, document.getElementById("root"));
