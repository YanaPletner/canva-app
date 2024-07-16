import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
dotenv.config()

//PRODUCTION ENVIRONMENT//
if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:3030',
        credentials: true
    }))
} else {
    app.use(cors({
        credentials: true
    }))
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "./frontend/dist")))
    app.get('*', (req, res) => {
        res.send('<h1>Hello</h1>')
        res.sendFile(path.resolve(__dirname, "./", "frontend", "dist", "index.html"
        ))
    })
}

//Connecting to MongoDB
// const dbConnect = async () => {
//     try {
//         if (process.env.NODE_ENV === 'local') {
//             await mongoose.connect(process.env.LOCAL_DB_URI)
//             console.log('Local Database Is Connected...')
//         } else {
//             await mongoose.connect(process.env.MONGODB_URI)
//             console.log('Production Database Is Connected...')
//         }
//     } catch (error) {
//         console.log('Database Connection Failed.')
//     }
// }

const dbConnect = async () => {
    try {
        const dbURI = process.env.NODE_ENV === 'local' ? process.env.LOCAL_DB_URI : process.env.MONGODB_URI;
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Database connected: ${dbURI}`);
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); // Exit with failure
    }
}
dbConnect()

//Starting the Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`))