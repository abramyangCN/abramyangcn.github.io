import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Hi, I&apos;m AbramYang 👋
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              I&apos;m a developer passionate about building great web experiences. 
              Here I share my thoughts on web development, open source, and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
          <Link href="/blog" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View all →
          </Link>
        </div>
        {featuredPosts.length > 0 ? (
          <div className="grid gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts yet. Check back soon!</p>
        )}
      </section>
    </div>
  );
}
