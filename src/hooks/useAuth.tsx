import React, { createContext, useContext, useState } from "react";
import * as Realm from "realm-web";

const AuthContext = createContext<any>(null);

const app = Realm.getApp("react-protected-contextapi-vbtsc");

export const AuthProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const facebookLogin = async () => {
        const redirectUri = "https://app.example.com/handleOAuthLogin";
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
        }
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, tryToLogin }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
