import { Link, useLocation } from "react-router-dom";

const Footer = (): JSX.Element => {
    const location = useLocation();

    const routes = [
        { path: "/", text: "Find Meetups" },
        { path: "/new-meetup", text: "Create Meetup" },
        { path: "/my-meetups", text: "My Meetups" },
    ];

    return (
        <nav className="bg-slate-300 w-screen">
            <ul className="flex gap-2 justify-between w-full text-center">
                {routes.map((route, index) => (
                    <Link to={route.path} key={index}>
                        <li
                            className={`px-4 py-8 ${
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

export default Footer;
