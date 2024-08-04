import { Injectable, NotFoundException } from '@nestjs/common';

export interface Post {
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

@Injectable()
export class PostsService {
  getPosts(): Post[] {
    return posts;
  }

  getPost(id: number): Post {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  createPost(author: string, title: string, content: string): Post {
    const id = posts.length + 1;
    const post = { id, author, title, content, likes: 0, comments: 0 };

    posts = [...posts, post];

    return post;
  }

  patchPost(
    id: number,
    author?: string,
    title?: string,
    content?: string,
  ): Post {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (author) {
      post.author = author;
    }

    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    return post;
  }

  deletePost(id: number): Post {
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }

    posts.filter((post) => post.id !== id);

    return posts[postIndex];
  }
}
