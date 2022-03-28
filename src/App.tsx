import { Routes, Route } from "react-router-dom";

import NewMeetupPage from "@/pages/NewMeetup";
import MyMeetupsPage from "@/pages/MyMeetups";
import MeetupsPage from "@/pages/Meetups";
import Navigation from "@/layouts/Navigation";
import Footer from "./layouts/Footer";

function App() {
    return (
        <div className="h-screen flex flex-col bg-slate-100 ">
            <Navigation />
            <div className="grow">
                <Routes>
                    <Route path="/meetups" element={<MeetupsPage />} />
                    <Route path="/new-meetup" element={<NewMeetupPage />} />
                    <Route path="/my-meetups" element={<MyMeetupsPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
