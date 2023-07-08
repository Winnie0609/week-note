import NotesItem from './components/NotesItem';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="p-5 lg:max-w-2xl self-start">
        <div className="uppercase font-semibold text-4xl mb-4 md:text-5xl md:mb-4">
          Weeknotes
        </div>
        <div className="font-normal text-sm md:text-normal">
          Here, I share a glimpse into my world each week.
        </div>
        <div className="font-normal text-sm md:text-normal">
          Consider this as just a murmur from me, so please don&apos;t take it
          too seriously!
        </div>
      </div>

      <hr className="w-full h-1 bg-secondary text-secondary mb-12"></hr>

      <NotesItem />
    </main>
  );
}
