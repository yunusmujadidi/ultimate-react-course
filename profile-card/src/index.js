import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import "./data";
import { skills, intros } from "./data";

function App() {
  return (
    <div className="app">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Emily Wilson"
          description="Mobile app developer with a knack for building engaging and interactive apps. When I'm not coding, you can find me at the local coffee shop, practicing photography, or volunteering at the animal shelter."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/57569832?v=4"
      alt="avatar"
    />
  );
}

// function IntroList() {
//   return (
//     <div className="intro-list">
//       {intros.map((intro) => (
//         <Intro name={intro.name} description={intro.description} />
//       ))}
//     </div>
//   );
// }

function Intro({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
