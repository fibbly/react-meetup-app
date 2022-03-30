export interface Route {
    path: string;
    title: string;
    navigationDisabled?: boolean;
}

const routes: Route[] = [
    { path: "/meetups", title: "Meetups" },
    { path: "/login", title: "Sign In" },
    { path: "/new-meetup", title: "New Meetup" },
    { path: "/my-meetups", title: "My Meetups" },
];

export default routes;
