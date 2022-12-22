// import logo from './logo.svg';
// import About from './components/About';
// import { useState } from 'react';
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alerts from "./components/Alerts";
// import './App.css';
import "./myapp.css"; // THis is mine css

function App() {
  // let [mystyle,setMystyle] = useState({
  //   color:'black',
  //   backgroundColor: 'white'

  // })

  // let [mytext,setMytext] = useState('Enable Dark Mode')

  // let [mybtnstyle,setbtnstyle] = useState({
  //   backgroundColor:'black',
  //   color:'white',
  //   // border: "blue";
  // })

  // let togglebtn = () =>{
  //   if(mystyle.color === 'black'){
  //     setMystyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })

  //     setMytext('Enable Light Mode')

  //   setbtnstyle({
  //     color:'black',
  //     backgroundColor:'white'
  //   })

  //   document.getElementById('exampleFormControlTextarea1').style.backgroundColor = 'black'

  //   }
  //   else{
  //    setMystyle({
  //     color: 'black',
  //     backgroundColor: 'white'
  //    })

  //    setMytext('Enable Dark Mode')

  //    setbtnstyle({
  //     color:'white',
  //     backgroundColor:'black'
  //   })

  //   document.getElementById('exampleFormControlTextarea1').style.backgroundColor = 'white'

  //   }
  // }

  // ?????????????????????????????????????????/

  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);

  let showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() =>{
      setAlert(null)
    },1500)
  }

  

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      document.title = 'TextUtils -> Dark Mode'
      
      setInterval(()=>{
document.title = 'TextUtils is Amazing Mode.'
      },1500)

      setInterval(()=>{
        document.title = 'Install TextUtils Now.'
              },2500)

      
      showAlert('Dark mode has been enable' , 'success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('Light mode has been enable' , 'success')
      document.title = 'TextUtils -> Light Mode'


    }
  };

  return (
    <>
      <div>
        <Navbar
          title="TextUtils"
          aboutText="Aboutus"
          mode={mode}
          toggleMode={toggleMode}
          btnSet="Enable Dark Button"
        />
        {/* <Navbar /> */}
        <Alerts alart={alert} />
        <div className="container">
          <Textform
            heading="Enter the text to analyze below"
            uppercasebtn="Convert to UpperCase"
            lowercasebtn="Convert to Lowercase"
            textClear="Clear"
            copy="Copy Text"
            mode={mode}
            showAlert={showAlert}
            // alart={alert}
         
          />
        </div>
        {/* <About/> */}
        {/* <button className="btn-primary" id="enablebtn">
          text
        </button> */}
        {/* style={mybtnstyle},onClick={togglebtn},{mytext} */}
      </div>
    </>
  );
}

export default App;
