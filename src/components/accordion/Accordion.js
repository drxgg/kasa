import "./accordion.scss";
import arrow from "../../assets/arrow.png";
import { useState } from "react";

export default function Accordion({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="accordion">
        <h3 className="accordion_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div
          className={toggle ? "accordion_content" : "accordion_content_hidden"}
        >
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>
  );
}
