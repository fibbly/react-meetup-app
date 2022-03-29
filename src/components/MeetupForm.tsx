import Card from "@/ui/Card";

const MeetupForm = (): JSX.Element => {
    return (
        <Card>
            <form>
                <div className="p-1">
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        className="bg-slate-200 p-2 rounded-md w-full mb-4"
                    />
                    <input
                        type="datetime-local"
                        id="date"
                        placeholder="Date"
                        className="bg-slate-200 p-2 rounded-md w-1/2 mb-4"
                    />
                    <input
                        type="text"
                        id="address"
                        placeholder="Address"
                        className="bg-slate-200 p-2 rounded-md w-full mb-4"
                    />
                    <textarea
                        rows={5}
                        id="description"
                        placeholder="Description"
                        className="bg-slate-200 p-2 rounded-md w-full mb-4"
                    />
                </div>
                <div className="actions flex justify-end">
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                        Create
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default MeetupForm;
