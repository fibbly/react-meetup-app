import MeetupItem, { MeetupItemProps } from "./MeetupItem";

interface MeetupListProps {
    meetups: MeetupItemProps[];
}

const MeetupList = ({ meetups }: MeetupListProps): JSX.Element => {
    return (
        <ul className="bg-zinc-200 h-full overflow-scroll flex flex-col gap-4 items-center p-4">
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
