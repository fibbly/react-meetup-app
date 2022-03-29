import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout";
import routes from "./routes";
import { useAuth } from "./hooks/useAuth";

function App() {
    const { isAuthenticated, loading } = useAuth();

    return (
        <Layout>
            <div className="grow">
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </div>
        </Layout>
    );
}

export default App;
