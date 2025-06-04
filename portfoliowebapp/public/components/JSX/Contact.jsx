import React from "react";
import "../CSS/Contact.css";

import imga from "../images/tt.png";

import imgb from "../images/gmail.png";
import imgc from "../images/ld.png";
import imgd from "../images/phone.png";
import imge from "../images/lt.png";

function Contact() {
  const coptext = () => {
    const text = "zamantaha.zt@gmail.com";

    navigator.clipboard.writeText(text + alert("hey"));
  };
  return (<>
    <div className="cmain">
      <h1>Get in touch</h1>

      <div className="maindiv">
        <div className="cdiv">
          <button type="" id="bt" onClick={coptext}>
            <img src={imgb} alt="" />
            <br />
            <h7>zamantaha.zt@gmail.com</h7>
          </button>
          <br />
        </div>
        <div>
          <button id="bt" type="button">
            <img src={imgd} alt="" />

            <br />
            <h7>03153010451</h7>
          </button>
        </div>

        <div>
          <img src={imge} alt="" />
          <br />
          <h7>Sindh, Pakistan</h7>
        </div>


      </div>
        <div className="hl">
          <a id="ac" href="https://x.com/TZTahaZaman" target="blank">
            <img id="im" src={imga} alt="" />
          </a>
          <br />
          <a id="ac" href="https://www.linkedin.com/in/taha-zaman-39084a369/" target="blanl">
            <img id="im" src={imgc} alt="" />
          </a>
        </div>
        <br />
    </div>
      <h5>Copright (©) 2025 Taha Zaman® - All rights reserved.</h5>
    
    </>
  );
}

export default Contact;
