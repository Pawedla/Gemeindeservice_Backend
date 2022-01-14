import express from "express";
import db from "./config/database.js";
import personRoutes from "./routes/indexPerson.js";
import sitzungRoutes from "./routes/indexSitzungen.js";
import teilnehmerRoutes from "./routes/indexTeilnehmer.js";
import beschluesseRoutes from "./routes/indexBeschluss.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/persons', personRoutes);
app.use('/sitzungen', sitzungRoutes);
app.use('/teilnehmer', teilnehmerRoutes);
app.use('/beschluss', beschluesseRoutes);
 
app.listen(process.env.PORT || 5000, () => console.log('Server running at port 5000'));