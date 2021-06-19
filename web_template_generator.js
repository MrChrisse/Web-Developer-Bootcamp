const fs = require('fs');
const folderName = process.argv[2] || 'Project';

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(
    `${folderName}/index.html`,
    `<!DOCTYPE html>\\n
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DOM Selecting</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
      <link rel="stylesheet" href="styles.css" />
    </head>
  
    <body>
      <script src="app.js"></script>
    </body>
  </html>`
  );
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
  console.log('SOMETHING WENT WRONG!!!!');
  console.log(e);
}
