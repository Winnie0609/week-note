import { notFound } from 'next/navigation';
import { getSinglePostContent, getSortedNotesData } from '@/lib/noteUtils';
import Link from 'next/link';

// notes data is ensured so that it can be prerendered at build time
export const generateStaticParams = () => {
  const allNotesData = getSortedNotesData();
  return allNotesData.map((note) => ({
    noteId: note.id,
  }));
};

// generateMetadata for each page
export const generateMetadata = ({
  params,
}: {
  params: { noteId: string };
}) => {
  const { noteId } = params;
  const allNotesData = getSortedNotesData();
  const note = allNotesData.find((item) => item.id === noteId);

  if (!note) return { title: 'Note Not Found' };
  return { title: note.title };
};

//params will come from url
const SingleNotePage = async ({ params }: { params: { noteId: string } }) => {
  const { noteId } = params;
  const { id, contentHtml, date } = await getSinglePostContent(noteId);
  const allNotesData = getSortedNotesData();
  const currentIndex = allNotesData.findIndex((item) => item.id === id);
  const isNextNoteExist = currentIndex !== 0;
  const isPrevNoteExist = currentIndex !== allNotesData.length - 1;

  if (!allNotesData.find((item) => item.id === id)) {
    return notFound();
  }

  const getNextNote = () => {
    if (!isNextNoteExist) return null;
    return allNotesData[currentIndex - 1]?.id;
  };

  const getPreviousNote = () => {
    if (!isPrevNoteExist) return null;
    return allNotesData[currentIndex + 1]?.id;
  };

  return (
    <div>
      <article>
        <div className="flex items-end mb-5 mt-10">
          <div className={`mr-2 font-semibold text-primary text-5xl`}>{id}</div>
          <div className="text-xl font-normal ">/ {date}</div>
        </div>

        <hr className="w-full h-1 bg-secondary text-hover border-0 mb-12"></hr>

        <div className="markdown-content">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <div className="mt-20 flex flex-col items-end">
          {isPrevNoteExist && (
            <Link
              href={`/notes/${getPreviousNote()}`}
              className="flex items-end hover:text-secondary hover:font-medium text-primary"
            >
              ← {getPreviousNote()}
            </Link>
          )}

          {isNextNoteExist && (
            <Link
              href={`/notes/${getNextNote()}`}
              className="flex items-end hover:text-secondary hover:font-medium text-primary"
            >
              {getNextNote()} →
            </Link>
          )}

          <Link
            href="/"
            className="hover:text-secondary hover:font-medium text-primary"
          >
            Home
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SingleNotePage;
