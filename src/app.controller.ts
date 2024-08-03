import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
