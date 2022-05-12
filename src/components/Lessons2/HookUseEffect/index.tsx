import { FC, useEffect, useState} from "react";

type CounterProps = {
    counter: number;
    onCount: () => void;
};

const Counter: FC<CounterProps> =({ counter, onCount}) => {
        useEffect(() =>{
            console.log("Counter did change", counter);
        });

        useEffect(() =>{
            console.log("Counter did mount or onCount changed");
        }, [onCount]);

        useEffect(() =>{
            console.log("Counter will be removed");
        }, []);
    return <button onClick={onCount}>Clicked {counter} times </button>
}; 

export const HookUseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [counterExist, toggleCounter] = useState(true);
    const hideCounter = () =>toggleCounter(false);
    const showCounter = () =>toggleCounter(true);
    const resetCounter = () => setCounter(0);
    const increment = () => setCounter(counter+1);

    return (
        <>
            <h2>useEffect</h2>
            {counterExist && (
                <Counter key={1} counter={counter} onCount={increment} />           
            )}
            <div>
                <button onClick={resetCounter}> Reset Counter </button>
                <button onClick={hideCounter}> Remove Counter </button>
                <button onClick={showCounter}> Show Counter </button>
            </div>
        </>
    );
};

export default HookUseEffect;
