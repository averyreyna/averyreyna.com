import { Metadata } from 'next';
import CV from '../components/cv';

export const metadata: Metadata = {
  title: 'Avery Reyna | CV',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-0 tracking-tighter">
        Contact
      </h1>
      <div>
        <CV />
      </div>
    </section>
  );
}