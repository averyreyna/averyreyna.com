import { Metadata } from 'next';
import CV from '../components/cv';

export const metadata: Metadata = {
  title: 'Avery Reyna | CV',
}

export default function Page() {
  return (
    <section>
      {/* <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Scholarship
      </h1> */}
      <div className="my-8">
        <CV />
      </div>
    </section>
  );
}