import { Module } from "@nestjs/common";
import { AppController } from "@app/app.controller";
import { AppService } from "./app.service";
import { TagModule } from "./tag/tag.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from '@app/configs/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}