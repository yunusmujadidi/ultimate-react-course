import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((e, i) => (
        <AccordionItem title={e.title} text={e.text} numb={i} key={i} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, numb }) {
  const [open, setOpen] = useState(false);
  function handleToogle() {
    setOpen((open) => !open);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={handleToogle}>
      <p className="number">{numb > 9 ? `0${numb + 1}` : `0${numb + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{open ? "-" : "▼"}</p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}
