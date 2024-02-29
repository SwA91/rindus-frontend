import { UserDataResponse } from './UserResponse';

export interface UserDto {
  name: string;
  surname: string;
  email: string;
}

export enum EUserTypeOperation {
  ADD,
  UPDATE,
  DELETE,
}

export interface IUserDataOperation {
  formValue: UserDataResponse;
  typeOperation: EUserTypeOperation;
}
