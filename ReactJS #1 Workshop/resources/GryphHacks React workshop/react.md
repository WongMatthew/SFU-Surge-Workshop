```

/* Name.js */
import React, { useState } from "react";
import "../styles/name.css";

export default function Name({ name }) {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((countOld) => countOld + 1);
    }

    function decrementCount() {
        setCount((countOld) => countOld - 1);
    }

    return (
        <div className="name-counter">
            <h1>{name}</h1>
            <button onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    );

```