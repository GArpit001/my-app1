import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {

  // let myStyle = {
  //   color : 'Red',
  //   backgroundColor: 'lightgreen'
  // }


  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       {/* <a className="navbar-brand" href="/">{props.title}</a> */}
//       {/* <h2 >{props.title}</h2> */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="/">
//             {props.title} <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="/"
//               role="button"
//               data-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu">
//               <a className="dropdown-item" href="/">
//                 Action
//               </a>
//               <a className="dropdown-item" href="/">
//                 Another action
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="/">
//                 Something else here
//               </a>
//             </div>
//           </li>

//           <div className="custom-control custom-switch">
//   <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
//   <label className="custom-control-label" htmlFor="customSwitch1">{props.btnSet}</label>
// </div>


//         </ul>

     
        
          
          
//       </div>
//     </nav>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About us</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown 
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
     
    </ul>
    <div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" onClick={props.toggleMode}  id="customSwitch1"/>
  <label className={`custom-control-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="customSwitch1">{props.btnSet}</label>
</div>
  </div>
</nav>




  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Plz Set title Here",
  aboutText: "About text Here",
};
