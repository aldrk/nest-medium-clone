import { UserEntity } from "@app/user/user.entity"

export interface IUserResponseInterface {
  user: UserType & { token: string }
}

export type UserType = Omit<UserEntity, "password" | "id" | "hashPassword">