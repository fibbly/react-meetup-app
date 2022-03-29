import { useContext } from "react";
import Card from "@/ui/Card";
import { Meetup } from "@/types/meetup";
import JoinedMeetupsContext from "@/store/meetup-context";

const MeetupItem = ({
    id,
    title,
    date,
    address,
    description,
}: Meetup): JSX.Element => {
    const joinedMeetupsCtx = useContext(JoinedMeetupsContext);

    const meetupJoined = joinedMeetupsCtx.meetupIsJoined(id);

    const toggleMeetupStatusHandler = () => {
        if (meetupJoined) {
            joinedMeetupsCtx.leaveMeetup(id);
        } else {
            joinedMeetupsCtx.joinMeetup({
                id,
                title,
                date,
                address,
                description,
            });
        }
    };

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
                    <button
                        className="bg-blue-500 text-white rounded-md px-4 py-1"
                        onClick={toggleMeetupStatusHandler}
                    >
                        {meetupJoined ? "Leave" : "Join"}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
