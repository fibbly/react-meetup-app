import Card from "@/ui/Card";

export interface MeetupItemProps {
    id: string;
    title: string;
    date: string;
    address: string;
    description: string;
}

const MeetupItem = ({
    title,
    date,
    address,
    description,
}: MeetupItemProps): JSX.Element => {
    return (
        <li className="w-full">
            <Card>
                <div className="flex justify-between mb-2">
                    <h3 className="text-xl">{title}</h3>
                    <p>{date}</p>
                </div>
                <div>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className="actions flex flex-row justify-end bg-slate-100">
                    <button className="bg-blue-500 text-white rounded-md px-4 py-1">
                        Join
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
