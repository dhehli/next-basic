'use server';

import { unstable_noStore as noStore } from 'next/cache';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { z } from 'zod';

const FormSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
});

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

export async function createPost(formData: FormData) {
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
