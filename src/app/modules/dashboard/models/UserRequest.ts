import { UserDto } from './UserDto';

export interface UserAddRequest extends UserDto {}

export interface UserUpdateRequest extends UserDto {
  id: number;
}
