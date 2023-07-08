import Link from 'next/link';
import { formatDate } from '../../lib/dateUtils';

type Props = {
  note: Note;
};

const NoteItem = ({ note }: Props) => {
  return (
    <div className="group p-5 justify-self-center lg:justify-self-start">
      <Link href={`/notes/${note.id}`} className="flex items-end">
        <div
          className={`mr-2 font-semibold text-primary text-5xl group-hover:text-secondary`}
        >
          {note?.id}
        </div>
        <div className="text-xl font-normal group-hover:text-secondary">
          / {formatDate(note?.date)}
        </div>
      </Link>
    </div>
  );
};

export default NoteItem;
