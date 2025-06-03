import React from "react";
import "../CSS/Skill.css";
import img1 from "../images/html.png";
import img2 from "../images/c.png";

import img3 from "../images/ai.png";
import img4 from "../images/css.png";
import img5 from "../images/tw.png";
import img6 from "../images/c.png";
import img7 from "../images/w.png";
import img9 from "../images/b.png";

function Skill() {
  return (
    <div className="sm">
      <div className="mainam">
        <h1 id="bh">Technologies I work with</h1>

        <a href="" target="blank">
          <div className="divs">
            <img src={img2} alt="" srcset="" />
            <h1>Adobe Photoshop</h1>
            <h2> Graphic-Designing </h2>
            <br />
            <h2></h2>I rely on Photoshop for professional-grade image editing,
            leveraging its advanced tools for non-destructive workflows (Smart
            Objects, Adjustment Layers), precision masking, high-end retouching,
            and typography controls ensure industry-standard results for digital
            art, photography, and design.
          </div>
        </a>

        <br />
        <a href="" target="blank">
          <div className="divs">
            <img src={img3} alt="" srcset="" />
            <h1>Adobe Illustrator</h1>
            <br />
            Graphic Designing
            <h2>
              The software's comprehensive vector manipulation tools allow me to
              develop detailed logos with perfect symmetry using the pathfinder
              operations, shape builder tool, and global color swatches for
              consistent brand applications. I frequently create intricate
              patterns using the seamless pattern maker and gradient mesh tool
              for realistic vector renderings.{" "}
            </h2>
          </div>
        </a>

        <br />
        <a href="" target="blank">
          <div className="divs">
            <img src={img1} alt="" srcset="" />
            <h1>HTML</h1>
            <h2>Web-Development</h2>

            <br />
            <h2>
              Whether building static content pages, complex web applications,
              or email templates requiring table-based layouts, my HTML
              implementation always focuses on maintainability, performance, and
              adherence to web standards as the backbone of all user-facing
              digital experiences.
            </h2>
          </div>
        </a>

        <br />
        <a href="" target="blank">
          <div className="divs">
            <img src={img4} alt="" srcset="" />
            <h1>CSS</h1>
            <h2>Web-Development</h2>
            <br />
            <h2>
              As a front-end specialist, I harness the full power of CSS3 and
              modern styling techniques to transform semantic HTML structures
              into visually compelling, responsive interfaces.
            </h2>
          </div>
        </a>

        <br />
        <a href="" target="blank">
          <div className="divs">
            <img src={img9} alt="" srcset="" />
            <h1>JS</h1>
            <h2>Web-Development</h2>
            <br />
            <h2>
              JavaScript is my go-to language for building dynamic, full-stack
              web applications, allowing me to craft everything from interactive
              UIs with React to scalable backend APIs with Node.js. Its
              versatility lets me develop cross-platform solutions—whether
              creating responsive web designs, building mobile apps with React
              Native, or automating workflows—while its vast ecosystem of
              frameworks and libraries accelerates development. I love how
              JavaScript brings ideas to life quickly, from simple animations to
              complex real-time applications, making it the perfect tool for
              turning creative concepts into functional, user-friendly
              experiences.
            </h2>
          </div>
        </a>

        <br />
        <a href="" target="blank">
          <div className="divs">
            <img src={img5} alt="" srcset="" />
          <h1>React.js</h1>
          <h2>Web-Development</h2>
            <br />
            <h2>
        eact.js is my preferred library for building modern, component-based user interfaces that are fast, scalable, and maintainable. I leverage its declarative syntax and virtual DOM to create dynamic, high-performance web applications with seamless state management using hooks and context API—or Redux for complex state logic. By breaking UIs into reusable components, I ensure clean, modular code that’s easy to debug and extend. React’s ecosystem (Next.js for SSR, React Router for navigation, and Material UI for styling) lets me deliver polished, SEO-friendly apps with rich interactivity.
            </h2>
          </div>
        </a>
        <br />
        <a href="" target="blank">
          <div className="divs">
            <img src={img7} alt="" srcset="" />
           <h1>Tailwind.css</h1>
           <h2>UI/UX</h2>
            <br />
            <h2>
           Tailwind CSS supercharges my workflow by letting me build custom, responsive UIs directly in markup—without context-switching to stylesheets. Its utility-first approach keeps my designs consistent and scalable, while JIT compilation ensures optimized, production-ready CSS. I pair it with React for rapid prototyping and pixel-perfect results, leveraging dark mode, animations, and PurgeCSS for lean bundles. Tailwind turns styling into a streamlined, maintainable system—not a chore.
            </h2>
          </div>
        </a>

        <br />
      </div>
    </div>
  );
}

export default Skill;
