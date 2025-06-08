import React from "react";
import "../CSS/Contact.css";
import imgg from "../Images/gmail-logo.png";
import imgp from "../Images/phone.png";
import imgt from "../Images/tt.png";
import imgl from "../Images/lt.png";
import imglk from "../Images/lk.png";
import imggt from "../Images/gt.png";
import imgdc   from "../Images/dc.png";
export default function Contact() {
  const tgm = () => {
    let gt = "zamantaha.zt@gmail.com";
    navigator.clipboard.writeText(gt);
    alert("Copied to clipboard: " + gt);                    
  };
   const tph = () => {
    let ph = "+92 3153010451";
    navigator.clipboard.writeText(ph);
    alert("Copied to clipboard: " + ph);                    
  }
  return (
    <div className="cmain">
      <h1>Contact </h1>
       <br />
      <div className="cdivs">
        <button onClick={tph}>
          <img id="imgh" src={imgp} alt="" />
        </button>
        <a href="https://github.com/tahazaman-tech-guy/Portfolio" target="_blank">
          <img id="imgh" src={imggt} alt="" />
        </a>{" "}
        <button onClick={tgm}>
          <img id="imgh" src={imgg} alt="" />
        </button>
        <a href="https://www.google.com/maps/place/Iqbal+Colony+Latifabad,+Hyderabad,+71000/@25.3650362,68.3617242,62m/data=!3m1!1e3!4m6!3m5!1s0x394c704487cd34b7:0x796951af6a48a920!8m2!3d25.3605804!4d68.3644298!16s%2Fg%2F11gfcz2p0z?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
          <img id="imgh" src={imgl} alt="" />
        </a>{" "}
        <a href="" target="_blank">
          <img id="imgh" src={imgdc} alt="" />
        </a>{" "}
        <a
        href={'https://www.linkedin.com/in/taha-zaman-39084a369/'} target="_blank">         <img id="imgh" src={imglk} alt="" />
        </a>
        <a href="https://x.com/TZTahaZaman" target="_blank">
          <img id="imgh" src={imgt} alt="" />
        </a>
        
      </div>
    </div>
  );
}
