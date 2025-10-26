import Navigation from '@/components/Navigation';
import MarkdownContent from '@/components/MarkdownContent';
import { getMarkdownContent } from '@/lib/markdown';

export default function ResearchPage() {
  const { content } = getMarkdownContent('research');

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12 max-w-4xl">
        <Navigation currentPage="Research" />
        <MarkdownContent content={content} />

        {/* <p className="text-sm text-gray-600 mt-12">
          Template adapted from{' '}
          <a href="https://www.cs.princeton.edu/~danqic" className="text-blue-600 hover:underline">
            Danqi Chen
          </a>
          's.
        </p> */}
      </div>
    </div>
  );
}
