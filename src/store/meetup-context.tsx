import { Meetup } from "@/types/meetup";
import { createContext, useState } from "react";

interface IJoinedMeetupsContext {
    joinedMeetups: Meetup[];
    totalJoinedMeetups: number;
    joinMeetup: (meetup: Meetup) => void;
    leaveMeetup: (meetupId: string) => void;
    meetupIsJoined: (meetupId: string) => boolean;
}

const JoinedMeetupsContext = createContext<IJoinedMeetupsContext>({
    joinedMeetups: [],
    totalJoinedMeetups: 0,
    joinMeetup: (meetup) => {},
    leaveMeetup: (meetupId) => {},
    meetupIsJoined: (meetupId) => false,
});

export const JoinedMeetupsContextProvider: React.FC = ({ children }) => {
    const [joinedMeetups, setJoinedMeetups] = useState<Meetup[]>([]);

    const joinMeetupHandler = (meetup: Meetup) => {
        setJoinedMeetups((previousJoinedMeetups) => {
            return previousJoinedMeetups.concat(meetup);
        });
    };

    const leaveMeetuphandler = (meetupId: string) => {
        setJoinedMeetups((previousJoinedMeetups) => {
            return previousJoinedMeetups.filter(
                (meetup) => meetup.id !== meetupId
            );
        });
    };

    const meetupIsJoinedHandler = (meetupId: string) => {
        return joinedMeetups.some((meetup) => meetup.id === meetupId);
    };

    const context: IJoinedMeetupsContext = {
        joinedMeetups: joinedMeetups,
        totalJoinedMeetups: joinedMeetups.length,
        joinMeetup: joinMeetupHandler,
        leaveMeetup: leaveMeetuphandler,
        meetupIsJoined: meetupIsJoinedHandler,
    };

    return (
        <JoinedMeetupsContext.Provider value={context}>
            {children}
        </JoinedMeetupsContext.Provider>
    );
};

export default JoinedMeetupsContext;
