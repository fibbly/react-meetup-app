import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import MeetupsPage from "./pages/Meetups";
import LoginPage from "@/pages/Login";
import NewMeetupPage from "@/pages/NewMeetup";
import MyMeetupsPage from "./pages/MyMeetups";
import RequireAuth from "@/components/RequireAuth";
import AuthRedirect from "./pages/AuthRedirect";

function App() {
    return (
        <Layout>
            <div className="grow">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/auth/facebook/callback"
                        element={<AuthRedirect />}
                    />
                    <Route
                        path="/meetups"
                        element={
                            <RequireAuth>
                                <MeetupsPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/new-meetup"
                        element={
                            <RequireAuth>
                                <NewMeetupPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/my-meetups"
                        element={
                            <RequireAuth>
                                <MyMeetupsPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/meetups" replace />}
                    />
                </Routes>
            </div>
        </Layout>
    );
}

export default App;
