import MeetupForm from "@/components/MeetupForm";
import { NewMeetup } from "@/types/meetup";

const NewMeetupPage = (): JSX.Element => {
    const createMeetupHandler = (meetupData: NewMeetup) => {
        console.log(meetupData);

        fetch(process.env.REACT_APP_REALM_GRAPHQL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem(
                    "realm_accessToken"
                )}`,
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return <MeetupForm onCreateMeetup={createMeetupHandler} />;
};

export default NewMeetupPage;
