import { Metadata } from 'next';
import Publications from '../components/publications';

export const metadata: Metadata = {
  title: 'Avery Reyna | Publications',
}

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