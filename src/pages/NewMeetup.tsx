import MeetupForm from "@/components/MeetupForm";
import { NewMeetup } from "@/types/meetup";
import * as Realm from "realm-web";
const {
    BSON: { ObjectId },
} = Realm;

const NewMeetupPage = (): JSX.Element => {
    const createMeetupHandler = (meetupData: NewMeetup) => {
        console.log(meetupData);
        //axios.post("")
    };

    return <MeetupForm onCreateMeetup={createMeetupHandler} />;
};

export default NewMeetupPage;
