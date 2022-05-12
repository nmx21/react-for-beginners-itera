import { FC } from "react";
import { Contacts } from "./Contacts";
import { authorData, AuthorDataContext } from "./AuthorDataContext";

const Main = () => (
    <main>
        <h1>Hello, this is my page</h1>
        <p>
            Some text some text some text some text some text some text some text some text some text some text some text some text some text 
        </p>
        <Contacts />
    </main>
);

const Footer: FC<{ author: string}> = ({author}) =>{
    const year = new Date().getFullYear;
    return(
        <footer> 
            <>
                By { author }. (C) {year}
            </>
        </footer>
    );
};


const HookContext = () => {
    const { authorName } = authorData;
    return (
        <>
            <h2>useContext</h2>
            <AuthorDataContext.Provider value={authorData}>
                <Main />
            </AuthorDataContext.Provider>
            <Footer author = {authorName}/>
        </>
    );
};
export default HookContext;