import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(__dirname));

app.all('/*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5020;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
