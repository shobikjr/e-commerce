import express from "express";
import { connectMongoDb } from "./connection";
import BrandRoutes from "./routes/brands";
import CategoryRoutes from "./routes/categories";
import ProductRoutes from "./routes/products";
import CartRoutes from "./routes/carts";
import cors from 'cors';

const app: express.Application = express();
const PORT: number = 4000

connectMongoDb('mongodb://127.0.0.1:27017/ecom_kath')


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/api/brands', BrandRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/products', ProductRoutes);
app.use("/api/carts", CartRoutes);


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));