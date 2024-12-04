// DATI

const express = require("express");
const app = express();
const port = 3000;
const gamesRouter = require("./routers/posts");

// ESECUZIONE
app.use("/posts", gamesRouter);

// app.get( "/", (req,res) => {
// res.send("Server del mio blog") //ritorna testo
// });

// app.get("/bacheca", (req,res) => {
//     const data = {
//         post : myPosts,
//         totale : myPosts.length
//     }
//     res.json(data) //ritorna un oggetto: con un array di oggetti(in cui ogni oggetto è un post) e un numero che sarebbe il numero di oggetti dell'array
// });

app.use(express.static("public"));

app.listen(port, () => {
    console.log("il mio server è partito ")
});