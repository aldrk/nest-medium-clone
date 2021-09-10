import { Body, Controller, Post } from "@nestjs/common"
import { UserService } from "@app/user/user.service"
import { CreateUserDto } from "@app/user/dto/createUser.dto"
import { IUserResponseInterface } from "@app/user/types/userResponse.interface"

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post("/users")
  async createUser(@Body("user") createUserDto: CreateUserDto): Promise<IUserResponseInterface> {
    const user = await this.userService.createUser(createUserDto)

    return this.userService.buildUserResponse(user)
  }
}