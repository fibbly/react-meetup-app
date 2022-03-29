import { useContext } from "react";
import JoinedMeetupsContext from "@/store/meetup-context";
import MeetupList from "@/components/MeetupList";

const MyMeetupsPage = (): JSX.Element => {
    const joinedMeetupsCtx = useContext(JoinedMeetupsContext);

    let content;

    if (joinedMeetupsCtx.totalJoinedMeetups) {
        content = <p>You have not joined any meetups!</p>;
    } else {
        content = <MeetupList meetups={joinedMeetupsCtx.joinedMeetups} />;
    }

    return <div>{content}</div>;
};

export default MyMeetupsPage;
