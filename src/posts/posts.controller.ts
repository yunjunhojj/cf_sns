import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

let posts: Post[] = [
  {
    id: 1,
    author: 'John',
    title: 'My first post',
    content: 'Hello World!',
    likes: 10,
    comments: 5,
  },
  {
    id: 2,
    author: 'Jane',
    title: 'My second post',
    content: 'Hello World!',
    likes: 5,
    comments: 2,
  },
  {
    id: 3,
    author: 'John',
    title: 'My third post',
    content: 'Hello World!',
    likes: 8,
    comments: 3,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Post[] {
    return posts;
  }

  @Get(':id')
  getPost(@Param('id') id: number): Post {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  @Post()
  createPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ): Post {
    const post: Post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likes: 0,
      comments: 0,
    };

    posts = [...posts, post];

    return post;
  }
}
