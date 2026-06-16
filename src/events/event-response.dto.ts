export class EventResponseDto {
  id: string;

  title: string;

  eventDate: Date;

  startTime: string;

  endTime: string;

  venueName: string;

  address: string;

  city: string;

  state: string;

  fee: number;

  notes: string | null;

  client: {
    id: string;
    name: string;
    phone: string;
    email: string;
  };

  artist: {
    id: string;
    fullName: string;
    stageName: string;
    email: string;
  };

  constructor(event: any) {
    this.id = event.id;
    this.title = event.title;
    this.eventDate = event.eventDate;
    this.startTime = event.startTime;
    this.endTime = event.endTime;
    this.venueName = event.venueName;
    this.address = event.address;
    this.city = event.city;
    this.state = event.state;
    this.fee = event.fee;
    this.notes = event.notes;

    this.client = {
      id: event.client.id,
      name: event.client.name,
      phone: event.client.phone,
      email: event.client.email,
    };

    this.artist = {
      id: event.artist.id,
      fullName: event.artist.fullName,
      stageName: event.artist.stageName,
      email: event.artist.email,
    };
  }
}
