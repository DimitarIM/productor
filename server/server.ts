import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();
const PORT = parseInt(<string>process.env.PORT, 10) || 3000
const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));

// app.use(async (req, res, next) => {
//     try {
//         const decision = await aj.protect(req, {
//             requested: 1
//         })

//         if (decision.isDenied()) {
//             if (decision.reason.isRateLimit()) res.status(429).json({
//                 error: "Too many requests"
//             })
//             else if (decision.reason.isBot()) res.status(403).json({
//                 error: "Bot access denied"
//             })
//             else res.status(403).json({
//                 error: "Forbidden"
//             })
//             return
//         }



//         next();
//     } catch (error) {
//         console.log("AJ error", error);
//         next(error);
//     }
// })

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes)

async function initDB() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                image VARCHAR(255) NOT NULL,
                category VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `

        await sql`
            CREATE TABLE IF NOT EXISTS categories (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `
        await sql`
            CREATE TABLE IF NOT EXISTS cart (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                image VARCHAR(255) NOT NULL,
                category VARCHAR(255) NOT NULL,
                added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `
        console.log("DB Initialized")
    } catch (error) {
        console.log("DB Initialization error", error);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT} ...`)
    });
})
