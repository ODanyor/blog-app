import React, { useEffect, useState } from "react";
import { Timer } from "./styles";

const index = ({ seconds }) => {
  const [time, setTime] = useState(0);

  // Timer
  function convertTime(t) {
    const min = Math.floor(t / 60);
    const sec = t % 60;
    return min + ":" + sec;
  }

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevState) => prevState - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  useEffect(() => {
    setTime(seconds);
  }, [seconds]);

  return <Timer>{convertTime(time)}</Timer>;
};

export default index;
