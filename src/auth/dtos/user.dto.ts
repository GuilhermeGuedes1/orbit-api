export class CurrentUserDto {
  sub!: string;
  name!: string;
  email!: string;
  organizationId!: string;

  constructor(data: CurrentUserDto) {
    Object.assign(this, data);
  }
}
