import { UserDto } from './UserDto';

export interface UserDataResponse extends UserDto {
  id: number;
  lastUpdated: string;
  dateCreated: string;
}
