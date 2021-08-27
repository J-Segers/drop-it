import React, {createContext, useState} from "react";

export const VisibilityContext = createContext(null);

function VisibilityContextProvider({children}) {

    const [authyVisible, toggleAuthyVisible] = useState(false);
    const [dropDownMenu, toggleDropDownMenu] = useState(false);
    const [loginOrRegister, setLoginOrRegister] = useState("login");

    function toggleLoginPopUp() {
        if(authyVisible === false) {
            toggleAuthyVisible(true);
        } else {
            toggleAuthyVisible(false);
        }
    }

    function toggleMenu() {
        if(dropDownMenu === false) {
            toggleDropDownMenu(true);
        } else {
            toggleDropDownMenu(false);
        }
    }

    function popupSwitch() {
        if(loginOrRegister === "login") {
            setLoginOrRegister("register");
        }

        if(loginOrRegister === "register") {
            setLoginOrRegister("login");
        }
    }

    return (
        <VisibilityContext.Provider
            value={{
                toggleLoginPopUp: toggleLoginPopUp,
                authyVisible: authyVisible,
                toggleMenu: toggleMenu,
                dropDownMenu: dropDownMenu,
                popupSwitch: popupSwitch,
                loginOrRegister: loginOrRegister
            }}
        >
            {children}
        </VisibilityContext.Provider>
    );
}

export default VisibilityContextProvider;