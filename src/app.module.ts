import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { OrderModule } from './order/order.module';
import { CommentModule } from './comment/comment.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`
  }),
  ServeStaticModule.forRoot({
    rootPath: resolve(__dirname, 'static')
  }),

  SequelizeModule.forRoot({
    dialect: 'postgres',
    host:process.env.POSTGRES_HOST,
    port:Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [],
    autoLoadModels: true,
    logging: false
  }),
   UsersModule, EquipmentModule, OrderModule, CommentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
