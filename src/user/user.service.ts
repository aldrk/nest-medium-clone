import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "@app/user/dto/createUser.dto"
import { UserEntity } from "@app/user/user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { sign } from "jsonwebtoken"
import { ConfigService } from "@nestjs/config"
import { IUserResponseInterface } from "@app/user/types/userResponse.interface"

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>, private readonly configService: ConfigService) {
  }

  async createUser(createUserDro: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity()
    Object.assign(newUser, createUserDro)

    return await this.userRepository.save(newUser)
  }

  generateJWT({ id, email, username }: Partial<UserEntity>): string {
    return sign({ id, email, username }, this.configService.get("JWT_SECRET"))
  }

  buildUserResponse({username, bio, email, image, id}: UserEntity): IUserResponseInterface {
    return {
      user: {
        username,
        email,
        image,
        bio,
        token: this.generateJWT({id, email, username}),
      },
    }
  }
}