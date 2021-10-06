import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  // run code based on given condition

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", _token);
  }, [token]);

  return (
    // conditional rendering
    <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>
  );
}

export default App;
