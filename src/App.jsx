import { useState } from 'react'
import { Navbar } from "./components/Navbar";
import { styles} from "/src/App.modules.css"


function App() {


  return (
    <>
    <div className={styles.App}>
      <Navbar/>
    </div>
    </>
  );
}

export default App
