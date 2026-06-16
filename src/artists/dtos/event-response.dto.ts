import { PaymentMethod } from '../../generated/prisma/client';

type EventWithRelations = {
  id: string;
  title: string;
  eventDate: Date;
  startTime: string | null;
  endTime: string | null;
  setDuration: string | null;
  venueName: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  paymentDate: Date | null;
  paymentMethod: PaymentMethod | null;
  hasContract: boolean;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
  client: {
    id: string;
    name: string;
    companyName: string | null;
    phone: string | null;
    email: string | null;
  } | null;
  artist: {
    id: string;
    fullName: string;
    stageName: string;
    email: string | null;
    phone: string | null;
  } | null;
};

export class EventResponseDto {
  id: string;
  title: string;
  eventDate: Date;
  startTime: string | null;
  endTime: string | null;
  setDuration: string | null;
  venueName: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  paymentDate: Date | null;
  paymentMethod: PaymentMethod | null;
  hasContract: boolean;
  notes: string | null;

  client: EventWithRelations['client'];
  artist: EventWithRelations['artist'];

  createdAt: Date;
  updatedAt: Date;

  constructor(event: EventWithRelations) {
    this.id = event.id;
    this.title = event.title;
    this.eventDate = event.eventDate;
    this.startTime = event.startTime;
    this.endTime = event.endTime;
    this.setDuration = event.setDuration;
    this.venueName = event.venueName;
    this.address = event.address;
    this.city = event.city;
    this.state = event.state;
    this.paymentDate = event.paymentDate;
    this.paymentMethod = event.paymentMethod;
    this.hasContract = event.hasContract;
    this.notes = event.notes;
    this.client = event.client;
    this.artist = event.artist;
    this.createdAt = event.createdAt;
    this.updatedAt = event.updatedAt;
  }
}
