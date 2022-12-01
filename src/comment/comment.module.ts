import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Equipment } from 'src/equipment/equipment.model';
import { User } from 'src/users/users.model';
import { CommentController } from './comment.controller';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Comment,User,Equipment])
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService]
})
export class CommentModule {}
