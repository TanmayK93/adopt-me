//import React, { useState, lazy, Suspense } from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParms from "./searchParams";
import Details from "./Details";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

/*
Dynamic loading
const Details = lazy(() => import("./Details"));
const SearchParms = lazy(() => import("./searchParams"));
*/
const App = () => {
  /*
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  ]);
  //Below is the JSX
    return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
  */
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/*<Suspense fallback={<h1>Loading Route...</h1>}> */}
          <Router>
            <SearchParms path="/" />
            <Details path="/details/:id" />
          </Router>
          {/*</Suspense>*/}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
