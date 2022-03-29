interface BaseMeetup {
    title: string;
    date: string;
    address: string;
    description: string;
}

export interface Meetup extends BaseMeetup {
    id: string;
}

export interface NewMeetup extends BaseMeetup {}
