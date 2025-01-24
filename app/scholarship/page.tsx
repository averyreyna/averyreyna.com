import { Metadata } from 'next';
import Scholarship from '../components/scholarship';

export const metadata: Metadata = {
  title: 'Avery Reyna | Scholarship',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Scholarship
      </h1>
      <div className="my-8">
        <Scholarship />
      </div>
    </section>
  );
}