const fs = require('fs');
const path = require('path');

const title = process.argv[2];

if (!title) {
  console.error('Please provide a title for the new blog post.');
  process.exit(1);
}

const date = new Date().toISOString().split('T')[0];
const templatePath = path.join(__dirname, './post-template.md');
const newPostPath = path.join(__dirname, `../notePosts/${title}.md`);

try {
  const templateContent = fs.readFileSync(templatePath, 'utf-8');
  const newPostContent = templateContent
    .replace('INDEX_PLACEHOLDER', title)
    .replace('TITLE_PLACEHOLDER', `#${title}`)
    .replace('DATE_PLACEHOLDER', date);
  fs.writeFileSync(newPostPath, newPostContent);
  console.log(`New blog post "${title}" created at "${newPostPath}"`);
} catch (error) {
  console.error('Error creating the new blog post:', error);
  process.exit(1);
}
