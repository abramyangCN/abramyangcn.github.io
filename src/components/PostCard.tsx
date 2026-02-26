import Link from 'next/link';
import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <time dateTime={frontmatter.date}>{formattedDate}</time>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          <Link href={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
            {frontmatter.title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">{frontmatter.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-1"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
