import express from "express";

const app = express();
const port = 3030;

const corsOptions = {
    origin: [
        'http://127.0.0.1:8080',
        'http://localhost:8080',

        'http://localhost:5173',
        'http://127.0.0.1:5173',

        'http://localhost:5174',
        'http://127.0.0.1:5174',
    ],
    credentials: true,
}

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import mongoose from 'mongoose'
// import path from 'path'
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express()
// dotenv.config()

// const corsOptions = {
//     origin: [
//         'http://127.0.0.1:8080',
//         'http://localhost:8080',

//         'http://localhost:5173',
//         'http://127.0.0.1:5173',

//         'http://localhost:5174',
//         'http://127.0.0.1:5174',
//     ],
//     credentials: true,
// }
// // App Configuration
// app.use(express.static('public'))
// app.use(express.json()) // for req.body
// app.use(cors(corsOptions))

// //PRODUCTION ENVIRONMENT//
// if (process.env.NODE_ENV === 'local') {
//     app.use(cors({
//         origin: 'http://localhost:3030',
//         credentials: true
//     }))
// } else {
//     app.use(cors({
//         credentials: true
//     }))
// }

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, "./frontend/dist")))
//     app.get('*', (req, res) => {
//         res.send('<h1>Hello</h1>')
//         res.sendFile(path.resolve(__dirname, "./", "frontend", "dist", "index.html"
//         ))
//     })
// }

// //Connecting to MongoDB
// const dbConnect = async () => {
//     try {
//         if (process.env.NODE_ENV === 'local') {
//             await mongoose.connect(process.env.LOCAL_DB_URI)
//             console.log('Local Database Is Connected...')
//         }
//     } catch (error) {
//         console.log('Database Connection Failed.')
//     }
// }
// dbConnect()

// //Starting the Server
// const PORT = process.env.PORT || 3030
// app.listen(PORT, () => console.log(`Server listening on port http://127.0.0.1:${PORT}/`))