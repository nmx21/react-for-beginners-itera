import { useState} from 'react';

export const HookState: React.FC = () => {
    const [state, setState] = useState({isAdmin:false, btnCaption: 'Assign Admin', userName:'User'});
    const {isAdmin,btnCaption, userName} = state;
    const assignAdmin = () => {
        isAdmin?
            setState({...state, isAdmin:false, btnCaption:'Assign Admin', userName: 'User'})
            :
            setState({...state, isAdmin:true, btnCaption:'Assign User', userName: 'Admin'})
    }
    return(
        <>
            <h2>setState</h2>
            <h4>Hello {userName}, your is { isAdmin? "Super Admin" : "a User" }</h4>
            <button onClick={assignAdmin}>{btnCaption}</button>
        </>
    );
};

export default HookState;