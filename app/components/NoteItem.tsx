import Link from 'next/link';

type Props = {
  note: Note;
};

const NoteItem = ({ note }: Props) => {
  return (
    <div>
      <Link href={`/notes/${note.id}`}>
        <div>{note?.id}</div>
        <div>{note?.title}</div>
      </Link>
    </div>
  );
};

export default NoteItem;
