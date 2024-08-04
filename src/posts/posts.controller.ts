import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

const posts: Post[] = [
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

  // GET /posts
  // Get all posts

  // GET /posts/:id
  // Get a post by id

  // POST /posts
  // Create a new post

  // PUT /posts/:id
  // Update a post by id

  // DELETE /posts/:id
  // Delete a post by id

  @Get()
  getPosts(): Post[] {
    return posts;
  }

  @Get(':id')
  getPost(@Param('id') id: number): Post {
    return posts.find((post) => post.id === id);
  }
}
