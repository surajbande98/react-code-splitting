
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Link,Outlet } from "react-router-dom";
import { lazyLoad } from './lazyLoad';

const Home = lazyLoad("./components/Home");
const About = lazyLoad("./components/About");
//const About = wait(2000).then(() => import("./components/About"));

export default function App(){ 
  return (<Router>
    <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        </Route>
    </Routes>
</Router>)
}

export function wait(time) {
  return new Promise(function(myResolve) {
    setTimeout(() => { myResolve() }, time);
  });
}

function Store() {
  return <h1>This is store </h1>
}

function Navbar() {
  return (
    <>
    <nav style={{display: "flex", gap: "1rem"}}>
      <Link to="/">Home</Link>
      <Link to="/store">Store </Link>
      <Link to="/about">About</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
    </>
  )
}
