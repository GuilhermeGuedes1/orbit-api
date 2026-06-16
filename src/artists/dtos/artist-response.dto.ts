import { Artist } from 'src/generated/prisma/client';

export class ArtistResponseDto {
  id: string;
  fullName: string;
  stageName: string;

  birthDate: Date | null;

  phone: string | null;
  email: string | null;

  address: string | null;
  city: string | null;
  state: string | null;

  pixKey: string | null;

  createdAt: Date;
  updatedAt: Date;

  constructor(artist: Artist) {
    this.id = artist.id;
    this.fullName = artist.fullName;
    this.stageName = artist.stageName;

    this.birthDate = artist.birthDate;

    this.phone = artist.phone;
    this.email = artist.email;

    this.address = artist.address;
    this.city = artist.city;
    this.state = artist.state;

    this.pixKey = artist.pixKey;

    this.createdAt = artist.createdAt;
    this.updatedAt = artist.updatedAt;
  }
}
