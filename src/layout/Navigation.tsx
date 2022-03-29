import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
    disabled?: boolean;
}

const Navigation = ({ disabled }: NavigationProps): JSX.Element => {
    const location = useLocation();

    if (disabled) return <></>;

    const routes = [
        { path: "/", text: "Find\nMeetups" },
        { path: "/new-meetup", text: "Create\nMeetup" },
        { path: "/my-meetups", text: "My\nMeetups" },
    ];

    return (
        <nav className="bg-slate-100 w-screen">
            <ul className="flex justify-between w-full text-center">
                {routes.map((route, index) => (
                    <Link
                        to={route.path}
                        key={index}
                        className={`w-full ${
                            index !== routes.length - 1 ? "border-r-2" : ""
                        }`}
                    >
                        <li
                            className={`px-4 py-8 h-full whitespace-pre-wrap ${
                                location.pathname === route.path
                                    ? "bg-blue-500 text-white font-bold"
                                    : ""
                            }`}
                        >
                            {route.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
