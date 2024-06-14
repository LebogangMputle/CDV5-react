//import { useState } from 'react'
import { Navbar } from "./components/Navbar/Navbar";
// import { styles} from "/src/App.modules.css"


function App() {
  const styles = import("/src/App.modules.css")

  return (
    <>
    <div className={styles.App}>
      <Navbar/>
    </div>
    </>
  );
}

export default App
