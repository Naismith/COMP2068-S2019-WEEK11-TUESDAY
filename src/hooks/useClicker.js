import { useState } from "react";

function useClicker() {
  const [clicked, setClicked] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  function increment(val = 1) {
    if (isNaN(val)) val = 1;
    setTimesClicked(timesClicked + val);
  }

  function decrement(val = 1) {
    if (isNaN(val)) val = 1;
    setTimesClicked(timesClicked - val);
  }

  function click(val) {
    setClicked(true);
    increment(val);
  }

  return {
    clicked,
    timesClicked,
    increment,
    decrement,
    click
  };
}

export default useClicker;
