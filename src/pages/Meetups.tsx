import MeetupList from "@/components/MeetupList";
import { Meetup } from "@/types/meetup";
import * as Realm from "realm-web";

const MEETUPS: Meetup[] = [
    {
        id: "m1",
        title: "First Meetup",
        description: "dsafdasfdasfdas",
        address: "123 Street",
        date: "3/23/22",
    },
    {
        id: "m2",
        title: "Second Meetup",
        description: "dsafdasfdasfdas",
        address: "123 Street",
        date: "3/23/22",
    },
];

const MeetupsPage = (): JSX.Element => {
    Realm.handleAuthRedirect();
    return <MeetupList meetups={MEETUPS} />;
};

export default MeetupsPage;
