// import React, { useState } from "react";
import { useState } from "react";
//
export default function Textform(props) {
  // let myStyle = {
  //   color : 'Red',
  //   backgroundColor: 'lightgreen'
  // }

  // let [mystyle, setMystyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  // let togglebtn = () => {
  //   if (mystyle.color === "white") {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //   } else {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //   }
  // };

  const click = () => {
    console.log("On clicked is active", valueee);
    // setText(event2.target.value.toUpperCase())
    // setText('Hello Boy')
    let newValue = valueee.toUpperCase();
    setText(newValue);
    props.showAlert('Convert to Uppercase' , 'success')
  };

  const changeUpper = (event) => {
    console.log("On change is clicked");
    setText(event.target.value);

  };

  const click2 = () => {
    console.log("lower is active");
    let newvalue = valueee.toLowerCase();
    setText(newvalue);
    props.showAlert('Convert to lowercase' , 'success')


  };

  function clear() {
    let newClear = "";
    setText(newClear);
    props.showAlert('Text has been Cleared' , 'success')
  }

  let handleCopy = () => {
    console.log("Success fully copied text");
    let text = document.getElementById("exampleFormControlTextarea1");
    // // text.scrollTop
    text.select();
    // // text.setSelectRange(0,9999)
    navigator.clipboard.writeText(text.value)
    // alert('Code Copy Successfully')
    // props.alart('Copied to Clipboard!' , 'success')
    props.showAlert('Copied to Clipboard!' , 'success')


    






  };

  const [valueee, setText] = useState("");
  // text = 'Hello ';  // Wrong way to change the state.
  // setText('new text'); // Correct way to change the state.
  return (
    <>
      <div className="mb-3">
        <h1>
          <label htmlFor="mybox" className="form-label my-3">
            {props.heading}{" "}
          </label>
        </h1>
        <textarea
          className="form-control"
          style={{backgroundColor : props.mode === 'light' ? 'white' : 'black', color : props.mode === 'light' ? 'black' : 'white' }}
          id="exampleFormControlTextarea1"
          value={valueee}
          onChange={changeUpper}
          rows="10"
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={click}
        >
          {props.uppercasebtn}
        </button>
        <button
          id="lobtn"
          type="button"
          className="btn btn-primary "
          onClick={click2}
        >
          {props.lowercasebtn}
        </button>
        <button
          id="lobtn"
          type="button"
          className="btn btn-primary mx-2 "
          onClick={clear}
        >
          {props.textClear}
        </button>

        <button
          id="copybtn"
          type="button"
          className="btn btn-primary "
          onClick={handleCopy}
        >
          {props.copy}
        </button>

        {/* <button className="btn-primary mx-2" onClick={togglebtn}>
          Click
        </button> */}
      </div>

      <div className="container" id="enablebtncontainer">
        <div className="summary my-3 ">
          <h3>Your text summary</h3>
          <b>
            <p>
              {valueee.split(" ").length} words and {valueee.length} characters{" "}
            </p>
          </b>
        </div>

        <h3 className="mx-5">Preview</h3>
        <h4 className="preview_para">{valueee.length > 0 ? valueee : 'Enter The text'}</h4>

        {/* <p>{0.008 * valueee.length}Minutes read</p> */}
      </div>


    </>
  );
}
