import React from 'react';
import { useEffect } from 'react';

function PromicisesExampal(props) {

    const one = () =>{
        return "One Excute"
    }

    const two = () => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Two Excute")
            }, 2000)
        })
    }

    const three = () => {
        return "Three Excute"
    }

    const all=async()=>{
        const o = one();
        console.log(o);

        const t = await two();
        console.log(t);

        const th = three();
        console.log(th);
    }

    useEffect(
        () => {
            all();
        },
    [])

    const display=(z)=>{
        console.log(z);
    }

    const sum = (display)=>{
        let x=10, y=5

        let z;
        z=x+y;
        display(z)
    }
    sum(display)

    return (
        <div>
            
        </div>
    );
}

export default PromicisesExampal;