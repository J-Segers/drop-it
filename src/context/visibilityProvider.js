import React, {createContext, useState} from "react";

export const VisibilityContext = createContext(null);

function VisibilityContextProvider({children}) {

    const [authyVisible, toggleAuthyVisible] = useState(false);
    const [dropDownMenu, toggleDropDownMenu] = useState(false);

    function toggleLoginPopUp() {
        if(authyVisible === false) {
            toggleAuthyVisible(!authyVisible);
        } else {
            toggleAuthyVisible(!authyVisible);
        }
    }

    function toggleMenu() {
        if(dropDownMenu === false) {
            toggleDropDownMenu(!dropDownMenu);
        } else {
            toggleDropDownMenu(!dropDownMenu);
        }
    }

    return (
        <VisibilityContext.Provider
            value={{
                toggleLoginPopUp: toggleLoginPopUp,
                authyVisible: authyVisible,
                toggleMenu: toggleMenu,
                dropDownMenu: dropDownMenu,
            }}
        >
            {children}
        </VisibilityContext.Provider>
    );
}

export default VisibilityContextProvider;