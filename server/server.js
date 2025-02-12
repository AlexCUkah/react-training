import express from "express";
import cors from "cors";
const app = express();

const corsOptions = {
    origin: ["http://localhost:8000","http://localhost:5173"],
}

app.use(cors(corsOptions))

app.get("/", (req,res) => {
    res.json({hello: ["apple", "banana", "mango"]})
})

app.listen(8000, () => {
console.log("Local: http://localhost:8000")
})