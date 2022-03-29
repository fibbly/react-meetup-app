import MeetupForm from "@/components/MeetupForm";
import { NewMeetup } from "@/types/meetup";
import axios from "axios";

const NewMeetupPage = (): JSX.Element => {
    const createMeetupHandler = (meetupData: NewMeetup) => {
        console.log(meetupData);
        //axios.post("")
    };

    return <MeetupForm onCreateMeetup={createMeetupHandler} />;
};

export default NewMeetupPage;
