import { PureComponent, useCallback, useState } from "react";

type WithCallback = { callback: () => void };
class ExpensiveComponent extends PureComponent<WithCallback> {
    render() {
        let i=0;
        while (i < 1000_000_000) {
            i++;
        }   
        const { callback} = this.props;
        console.log("finish render");
        return <button onClick={callback}>Expensive</button>
    }

    componentDidUpdate() {
        console.log("updated");
    }
}

const Callback = () => {
    const [state, setState] = useState(0);
    const increment = () => setState(state + 1);
    //const callback = () => console.log("callback");
    const callback = useCallback(() => console.log("callback"),[]);
    return(
        <>
            <ExpensiveComponent callback={callback}/>
            <button onClick={increment}>Increment: {state}</button>
        </>
    );
};

export default Callback;