import { notFound } from 'next/navigation';
import { getSinglePostContent, getSortedNotesData } from '@/lib/noteUtils';

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
  const { id, title, contentHtml } = await getSinglePostContent(noteId);
  const allNotesData = getSortedNotesData();

  if (!allNotesData.find((item) => item.id === id)) {
    return notFound();
  }

  return (
    <div>
      <article>
        <h1>{title}</h1>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
};

export default SingleNotePage;
