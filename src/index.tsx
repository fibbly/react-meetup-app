import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import * as Realm from "realm-web";
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import { AuthProvider } from "./hooks/useAuth";
import { JoinedMeetupsContextProvider } from "@/store/meetup-context";

export const APP_ID = process.env.REACT_APP_ID || "";

const app = new Realm.App(APP_ID);

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
    // Guarantee that there's a logged in user with a valid access token
    if (!app.currentUser) {
        // If no user is logged in, log in an anonymous user. The logged in user will have a valid
        // access token.
        await app.logIn(Realm.Credentials.anonymous());
    } else {
        // An already logged in user's access token might be stale. To guarantee that the token is
        // valid, we refresh the user's custom data which also refreshes their access token.
        await app.currentUser.refreshCustomData();
    }

    return app.currentUser?.accessToken;
}

// Configure the ApolloClient to connect to your app's GraphQL endpoint
const client = new ApolloClient({
    link: new HttpLink({
        uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
        // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
        // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
        // access token before sending the request.
        fetch: async (uri, options) => {
            const accessToken = await getValidAccessToken();
            const headers = options?.headers
                ? new Headers(options.headers)
                : new Headers();

            if (!headers.has("Authorization")) {
                headers.set("Authorization", `Bearer ${accessToken}`);
            }

            return fetch(uri, options);
        },
    }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <JoinedMeetupsContextProvider>
                    <ApolloProvider client={client}>
                        <App />
                    </ApolloProvider>
                </JoinedMeetupsContextProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
