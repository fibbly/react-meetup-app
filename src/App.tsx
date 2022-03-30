import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import MeetupsPage from "./pages/Meetups";
import LoginPage from "@/pages/Login";
import NewMeetupPage from "@/pages/NewMeetup";
import MyMeetupsPage from "./pages/MyMeetups";

function App() {
    return (
        <Layout>
            <div className="grow">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/meetups" element={<MeetupsPage />} />
                    <Route path="/new-meetup" element={<NewMeetupPage />} />
                    <Route path="/my-meetups" element={<MyMeetupsPage />} />
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
