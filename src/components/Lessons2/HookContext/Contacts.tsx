import { useContext } from "react";
import { AuthorDataContext } from "./AuthorDataContext";

export const Contacts = () =>{
    const {telegramm} = useContext(AuthorDataContext);
    return <p>Feel free to contact me in telegramm: {telegramm}</p>
}