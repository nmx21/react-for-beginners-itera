import { useState,useCallback } from "react";

const useCounter = () =>{
    const [value, setState] = useState(0);
    //const increment = () => {setState(value +1)};
    const increment = useCallback(() => setState(value + 1),[value])
    return {value, increment};
}

const CustomHook = () => {
    const { increment, value } = useCounter();
    return (
        <button onClick={increment}>Counted {value}</button>
    );
};

export default CustomHook;