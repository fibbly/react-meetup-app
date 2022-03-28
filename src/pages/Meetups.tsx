import { MeetupItemProps } from "@/components/MeetupItem";
import MeetupList from "@/components/MeetupList";

const MEETUPS: MeetupItemProps[] = [
    {
        id: "m1",
        title: "First Meetup",
        description: "dsafdasfdasfdas",
        address: "123 Street",
        date: "3/28/22",
    },
    {
        id: "m2",
        title: "Second Meetup",
        description: "dsafdasfdasfdas",
        address: "123 Street",
        date: "3/29/22",
    },
];

const MeetupsPage = (): JSX.Element => {
    return <MeetupList meetups={MEETUPS} />;
};

export default MeetupsPage;
