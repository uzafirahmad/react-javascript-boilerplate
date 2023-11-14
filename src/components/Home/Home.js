import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import AppContext from "../AppContext";

const Home = () => {
  let { test } = useContext(AppContext);
  return <div>Home-{test}</div>;
};

export default Home; 
