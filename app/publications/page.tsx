import Publications from '../components/publications';

export default function PublicationsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Publications
      </h1>
      <div className="my-8">
        <Publications />
      </div>
    </section>
  );
}