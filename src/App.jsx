import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Display, SignUpBanner } from "./components/Display/Display";
import { NewArrival } from "./components/NewArrival/NewArrival";
import { WeeklyPick } from "./components/WeeklyPick/WeeklyPick";
import { Footer } from "./components/Footer/Footer";
import { RotatingShoes } from "./components/RotatingShoes/RotatingShoes";
import "./App.scss";

function App() {
  return (
    <div className="App">
         <NavBar/>
    <div className="home-wrapper">
       <Home />
       <RotatingShoes /> 
      </div> 
      <Display />
      <NewArrival />
      <WeeklyPick />
      <SignUpBanner /> 
      <Footer />
    </div>
  );
}

export default App;
