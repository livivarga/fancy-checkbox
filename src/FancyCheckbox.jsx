import { useState } from "react";

const sad = '😒';
const happy = '😃';

function FancyCheckbox() {
  // Destructuring
  /* const [checked, setChecked] = useState(true); */

  const checkedState = useState(true); // returns with an array with 2 elements
  const checked = checkedState[0]; // checked = true | false
  const setChecked = checkedState[1]; // setChecked(true)

  function setCheckedToTrue() {
    setChecked(true)
  }

  function setCheckedToFalse() {
    setChecked(false);
  }

  if (checked === false) {
    // ui of the checked equal false state
    return (
      <button onClick={setCheckedToTrue}>{sad}</button>
    )
  } else {
    // ui of the checked equal true state
    return (
      <button onClick={setCheckedToFalse}>{happy}</button>
    )
  }
}

export default FancyCheckbox;