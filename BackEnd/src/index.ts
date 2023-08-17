import express, { Request, Response } from "express"

const porta = process.env.PORT || 8080
const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Welcome Api Arbnb")
})





app.listen(porta, () => { console.log(`server running on ${porta}`) })