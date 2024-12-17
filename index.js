import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();

app.use(cors())

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});

// get a list of 5 jokes
app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Another Joke",
            content: "This is a joke"
        }
    ]

    res.send(jokes);
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
