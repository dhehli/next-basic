import { unstable_noStore as noStore } from 'next/cache';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function fetchPosts() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    console.log('Fetching post data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const posts = await prisma.post.findMany({});
    return posts;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  }
}

export async function fetchPostById(id: number) {
  noStore();

  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post.');
  }
}
