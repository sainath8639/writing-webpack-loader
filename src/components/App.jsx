import React, { Component, useState } from "react";
import { Splide } from "@splidejs/react-splide";

const App = () => {
  const [state, setState] = useState(PROJECT_CODE);

  // return (
  //   <div className="App">
  //     {console.log(state)}
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1 className="App-title">Welcome to React</h1>
  //     </header>
  //     <p className="App-intro">
  //       To get started, edit <code>src/App.js</code> and save to reload.
  //     </p>
  //   </div>
  // );

  return (
    <Splide aria-label="My Favorite Images">
      {state}
      {console.log("abc is ", ABC)}
      <SplideSlide>
        <img src="image1.jpg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
};

export default App;
