import Publications from '../components/publications';

export default function PublicationsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Publications
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <Publications />
      </div>
    </section>
  );
}