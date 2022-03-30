import { useAuth } from "@/hooks/useAuth";

const LoginPage = (): JSX.Element => {
    const { login } = useAuth();

    return (
        <div className="bg-slate-800 h-full flex items-center justify-center">
            <button
                className="bg-slate-300 py-4 px-5 rounded-lg text-3xl"
                onClick={login}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;
