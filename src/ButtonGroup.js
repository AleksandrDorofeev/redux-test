import React from "react";
// import { store } from './store/store'
import { connect } from "react-redux";
import setTechnology from "./actions/actions";

const ButtonGroup = ({ technologies, setTechnology }) => {
  function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    setTechnology(tech);
  }

  return (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
)};

// function dispatchBtnAction(e) {
//   const tech = e.target.dataset.tech;
//   setTechnology(tech);
// }

// function dispatchBtnAction(e) {
//   const tech = e.target.dataset.tech
//   store.dispatch(setTechnology(tech))
// }

export default connect(
  null,
  { setTechnology }
)(ButtonGroup);
