import { Routes, Route } from "react-router-dom";

import NewMeetupPage from "@/pages/NewMeetup";
import MyMeetupsPage from "@/pages/MyMeetups";
import MeetupsPage from "@/pages/Meetups";
import Layout from "@/layout/Layout";

function App() {
    return (
        <Layout>
            <div className="grow">
                <Routes>
                    <Route path="/" element={<MeetupsPage />} />
                    <Route path="/new-meetup" element={<NewMeetupPage />} />
                    <Route path="/my-meetups" element={<MyMeetupsPage />} />
                </Routes>
            </div>
        </Layout>
    );
}

export default App;
