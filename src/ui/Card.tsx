const Card: React.FC = ({ children }) => {
    return (
        <div className="bg-white rounded-lg p-4 drop-shadow-md m-4">
            {children}
        </div>
    );
};

export default Card;
