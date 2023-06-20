import { getSortedNotesData } from '@/lib/noteUtils';
import NoteItem from './NoteItem';

const NotesItem = () => {
  const allNotesData = getSortedNotesData();

  return (
    <div>
      {allNotesData.map((item) => (
        <NoteItem key={item.id} note={item} />
      ))}
    </div>
  );
};

export default NotesItem;
