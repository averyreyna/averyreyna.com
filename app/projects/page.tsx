import { Projects } from '../components/projects';

export const metadata = {
  title: 'Avery Reyna | Projects',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Projects
      </h1>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}