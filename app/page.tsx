import NotesItem from './components/NotesItem';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <br />
      <div>
        <NotesItem />
      </div>
    </main>
  );
}
