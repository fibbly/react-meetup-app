import React, { createContext, useContext, useState } from "react";
import * as Realm from "realm-web";

const AuthContext = createContext<any>(null);

const app = Realm.getApp(process.env.REACT_APP_ID!);

export const AuthProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const facebookLogin = async () => {
        const redirectUri = "http://localhost:3000/meetups";
        const credentials = Realm.Credentials.facebook(redirectUri);
        const user = await app.logIn(credentials);
        console.log(`Logged in with id: ${user.id}`);
        Realm.handleAuthRedirect();
    };

    const tryToLogin = async () => {
        try {
            const result = await facebookLogin();
            console.log(result);
            setIsAuthenticated(true);
            return result;
        } catch (err) {
            console.error("Failed to log in", err);
            return false;
        }
    };

    const login = async () => {
        const result = await tryToLogin();
        if (result) {
            console.log("User has logged in", result);
            setIsAuthenticated(true);
            sessionStorage.setItem(
                "realm_accessToken",
                String(result["_accessToken"])
            );
        }
    };

    const logout = async (): Promise<void> => {
        await app.currentUser?.logOut().then(() => {
            console.log("The User has logged out");
            setIsAuthenticated(false);
            sessionStorage.setItem("realm_accessToken", "");
        });
    };

    const context = {
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
