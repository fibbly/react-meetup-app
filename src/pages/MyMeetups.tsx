import { useContext } from "react";
import JoinedMeetupsContext from "@/store/meetup-context";
import MeetupList from "@/components/MeetupList";

function MyMeetupsPage() {
    const joinedMeetupsCtx = useContext(JoinedMeetupsContext);

    let content;

    if (joinedMeetupsCtx.totalJoinedMeetups === 0) {
        content = (
            <div className="flex h-full items-center justify-center">
                <p className="text-slate-500 font-bold">
                    You have not joined any meetups!
                </p>
            </div>
        );
    } else {
        content = <MeetupList meetups={joinedMeetupsCtx.joinedMeetups} />;
    }

    return <>{content}</>;
}

export default MyMeetupsPage;
