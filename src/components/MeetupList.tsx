import { Meetup } from "@/types/meetup";
import MeetupItem from "./MeetupItem";

interface MeetupListProps {
    meetups: Meetup[];
}

const MeetupList = ({ meetups }: MeetupListProps): JSX.Element => {
    return (
        <ul className="bg-zinc-200 h-full overflow-scroll flex flex-col items-center">
            {meetups.map((meetup, index) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    address={meetup.address}
                    date={meetup.date}
                    description={meetup.description}
                />
            ))}
        </ul>
    );
};

export default MeetupList;
