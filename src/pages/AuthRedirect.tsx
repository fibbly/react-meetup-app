import * as Realm from "realm-web";

function AuthRedirect() {
    Realm.handleAuthRedirect();

    return <div>AuthRedirect</div>;
}

export default AuthRedirect;
