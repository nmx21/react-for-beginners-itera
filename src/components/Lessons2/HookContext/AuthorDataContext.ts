import { createContext} from 'react';

export const authorData = { 
    authorName: "Maks",
    telegramm: "@nmx_dll" 
};

export const AuthorDataContext = createContext(authorData);