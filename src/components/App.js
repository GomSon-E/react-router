import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// children props

function App({children}) {
  return (
    <div id="wrap">
      <Nav />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default App