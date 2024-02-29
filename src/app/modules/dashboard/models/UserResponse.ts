import { UserDto } from './UserDto';

export interface UserDataResponse extends UserDto {
  id: number;
  lastUpdated: string;
  dateCreated: string;
}

export interface UserAddResponse extends UserDto {
  id: number;
  dateCreated: string;
}

export interface UserUpdateResponse extends UserDto {
  id: number;
  lastUpdated: string;
}
