import NewMeetupPage from "@/pages/NewMeetup";
import MyMeetupsPage from "@/pages/MyMeetups";
import MeetupsPage from "@/pages/Meetups";
import AuthPage from "@/pages/Auth";

export interface Route {
    path: string;
    title: string;
    element: React.ReactNode;
    navigationDisabled?: boolean;
}

const routes: Route[] = [
    { path: "/", title: "Meetups", element: MeetupsPage() },
    { path: "/auth", title: "Sign In", element: AuthPage() },
    { path: "/new-meetup", title: "New Meetup", element: NewMeetupPage() },
    { path: "/my-meetups", title: "My Meetups", element: MyMeetupsPage() },
];

export default routes;
