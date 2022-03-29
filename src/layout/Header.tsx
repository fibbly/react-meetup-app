import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navigation = (): JSX.Element => {
    const routes = [
        { path: "/", title: "Meetups" },
        { path: "/new-meetup", title: "New Meetup" },
        { path: "/my-meetups", title: "My Meetups" },
    ];

    const location = useLocation();
    const [title, setTitle] = useState<string | undefined>(routes[0].title);

    useEffect(() => {
        const route = routes.find(({ path }) => location.pathname === path);
        setTitle(route?.title);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <header className="flex justify-between p-6 bg-slate-100 drop-shadow-md">
            <h1 className="text-4xl font-light">{title}</h1>
        </header>
    );
};

export default Navigation;
