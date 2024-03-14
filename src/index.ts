import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.send('server is up and running!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
