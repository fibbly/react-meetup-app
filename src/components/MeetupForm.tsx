import Card from "@/ui/Card";
import { useRef } from "react";
import { NewMeetup } from "@/types/meetup";

interface MeetupFormProps {
    onCreateMeetup: (meetupData: NewMeetup) => void;
}

const MeetupForm = ({ onCreateMeetup }: MeetupFormProps): JSX.Element => {
    const titleRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const title = titleRef?.current?.value;
        const date = dateRef?.current?.value;
        const address = addressRef?.current?.value;
        const description = descriptionRef?.current?.value || "";

        if (!title || !date || !address || !description) return;

        const meetupData: NewMeetup = {
            title,
            date,
            address,
            description,
        };

        onCreateMeetup(meetupData);
    };

    return (
        <Card>
            <form onSubmit={formHandler}>
                <div className="p-1 flex flex-col gap-1">
                    <label htmlFor="title" className="font-light">
                        What
                    </label>
                    <input
                        ref={titleRef}
                        type="text"
                        id="title"
                        placeholder="Title"
                        className="bg-slate-200 p-2 rounded-md w-full mb-4"
                        required
                    />
                </div>
                <div className="p-1 flex flex-col gap-1">
                    <label htmlFor="date" className="font-light">
                        When
                    </label>
                    <input
                        ref={dateRef}
                        type="text"
                        id="date"
                        placeholder="Date & Time"
                        className="bg-slate-200 p-2 rounded-md w-3/4 mb-4"
                        onFocus={(e) => (e.target.type = "datetime-local")}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                        }}
                        required
                    />
                </div>
                <div className="p-1 flex flex-col gap-1">
                    <label htmlFor="address" className="font-light">
                        Where
                    </label>
                    <input
                        ref={addressRef}
                        type="text"
                        id="address"
                        placeholder="Address"
                        className="bg-slate-200 p-2 rounded-md w-full mb-4"
                        required
                    />
                </div>
                <div className="p-1 flex flex-col gap-1">
                    <label htmlFor="description" className="font-light">
                        Why
                    </label>
                    <textarea
                        ref={descriptionRef}
                        rows={5}
                        id="description"
                        placeholder="Description"
                        className="bg-slate-200 p-2 rounded-md w-full mb-4"
                    />
                </div>
                <div className="actions flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-3 py-2 rounded-md"
                    >
                        Create
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default MeetupForm;
