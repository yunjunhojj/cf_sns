import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPost(): Post {
    return {
      author: 'John',
      title: 'My first post',
      content: 'Hello World!',
      likes: 10,
      comments: 5,
    };
  }
}
