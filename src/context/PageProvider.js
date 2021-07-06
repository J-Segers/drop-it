import React, {createContext, useState} from "react";

export const PageContext = createContext(null);

function PageContextProvider({children}) {

    const[currentPage, setCurrentPage] = useState("/");

    return (
        <PageContext.Provider
            value={{
                setPage: setCurrentPage,
                page: currentPage,
            }}
        >
            {children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;