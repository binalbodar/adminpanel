import React, { useMemo, useState } from 'react';

function UseMemoExampal(props) {

    const [numbar, setNumbar] = useState(0)
    const [count, setCount] = useState(0)

    const findfactorial = (n) => {
        console.log("findfactorial coled");
        if (n > 1) {
            return n * findfactorial(n - 1)
        } else {
            return 1
        }
    }

    const result = useMemo(()=>{
        return findfactorial(numbar)},[numbar])
    
    // const result = findfactorial(numbar)

    return (
        <div>
            <input type="text" placeholder='Enter Valed Numbar' onChange={(e) => setNumbar(e.target.value)} />
            <button onClick={(e) => setCount(count + 1)}>Counter</button>

            <p>Counter Value is: {count}</p>
            <p>findfactorial Value is: {result}</p>
        </div>
    );
}

export default UseMemoExampal;