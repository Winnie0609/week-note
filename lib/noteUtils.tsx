import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { formatDateFromDateToString } from '../lib/dateUtils';

const noteDirectory = path.join(process.cwd(), 'notePosts');

export const getSortedNotesData = () => {
  const allFileNames = fs.readdirSync(noteDirectory);

  const allNotesData = allFileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(noteDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse the gray-matter metadata
    const matterResult = matter(fileContents);

    const noteData: Note = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return noteData;
  });

  return allNotesData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getSinglePostContent = async (id: string) => {
  const fullPath = path.join(noteDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // convert to html style
  const fileContent = await remark().use(html).process(matterResult.content);
  const contentHtml = fileContent.toString();

  const noteDataWithContent: Note & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: formatDateFromDateToString(matterResult.data.date),
    contentHtml,
  };

  return noteDataWithContent;
};
