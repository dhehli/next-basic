import { notFound } from 'next/navigation';
import { fetchPostById } from '@/app/api/posts';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const post = await fetchPostById(parseInt(id));

  if (!post) {
    notFound();
  }

  return <>Detail</>;
}
