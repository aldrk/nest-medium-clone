import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "@app/user/dto/createUser.dto"

@Injectable()
export class UserService {
  async createUser(createUserDro: CreateUserDto) {
    return createUserDro
  }
}