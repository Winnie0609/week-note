import { getSortedNotesData } from '@/lib/noteUtils';
import NoteItem from './NoteItem';

const NotesItem = () => {
  const allNotesData = getSortedNotesData();

  return (
    <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-10 sm:grid-cols-2">
      {allNotesData.map((item) => (
        <NoteItem key={item.id} note={item} />
      ))}
    </div>
  );
};

export default NotesItem;
