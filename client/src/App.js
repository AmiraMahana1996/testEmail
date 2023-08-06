import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [welcom, setWelcom] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/RedeemingCodes").then((value) => {
      setWelcom(value.data);
    });
  }, []);
  return (
    <>
      {welcom.map((ele) => {
        return (
          <>
            <h1>{ele.codes}</h1>
          </>
        );
      })}
    </>
  );
}

export default App;
