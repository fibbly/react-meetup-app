import Header from "@/layout/Header";
import Navigation from "@/layout/Navigation";

const Layout: React.FC = ({ children }) => {
    return (
        <div className="h-screen flex flex-col bg-slate-300">
            <Header />
            {children}
            <Navigation />
        </div>
    );
};

export default Layout;
