import NotesItem from './components/NotesItem';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="p-5 lg:max-w-2xl self-start">
        <div className="uppercase font-semibold text-4xl mb-4 md:text-5xl md:mb-4">
          週記
        </div>
        <div className="font-normal text-sm md:text-normal">
          分享一些小事，每週一次（盡量）。
        </div>
        <div className="font-normal text-sm md:text-normal">
          意識流般的碎碎念，都是個人想法，不必太在意。
        </div>
      </div>

      <hr className="w-full h-1 bg-secondary text-secondary mb-12 dark:text-brown dark:bg-brown"></hr>

      <NotesItem />
    </main>
  );
}
