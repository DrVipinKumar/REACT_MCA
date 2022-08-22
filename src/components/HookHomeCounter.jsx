import { useState } from "react";
import HookCounter from "./HookCounter";

const HookHomeCounter = () => {
  const counter = [
    { id: 1, count: 3 },
    { id: 2, count: 1 },
    { id: 3, count: 2 },
    { id: 4, count: 0 },
  ];
  const [counters, setCounters] = useState(counter);
  return (
    <div>
      {counters.map((counter) => (
        <HookCounter key={counter.id} />
      ))}
    </div>
  );
};

export default HookHomeCounter;
