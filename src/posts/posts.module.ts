import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from "./post.entity";
import { PostRepository } from './post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostRepository])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
