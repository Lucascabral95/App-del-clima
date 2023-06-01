import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// TIPOGRAFIA DE GOOGLE FONT 
// import 'https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Lobster&family=Pacifico&family=Poppins:wght@900&family=Roboto&display=swap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from "react"
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const loadExternalResources = () => {
//   const flowbiteCSS = document.createElement('link');
//   flowbiteCSS.rel = 'stylesheet';
//   flowbiteCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css';
//   document.head.appendChild(flowbiteCSS);

//   const tailwindScript = document.createElement('script');
//   tailwindScript.src = 'https://cdn.tailwindcss.com';
//   document.head.appendChild(tailwindScript);
// };

// loadExternalResources();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


