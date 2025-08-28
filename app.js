import express from 'express';
import path from 'path';  // Path CommonJS module

/*
 * Approach for maintaining ES module syntax while accessing
 * directory paths.
 */
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/*
 *
 */

// Routes
import messageRouter from './routes/messageRouter.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));  // To parse form data into req.body

// Enables the use of static assets (such as CSS styles)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Enables EJS as the view engine
// Our app should look for templates in the /views subdirectory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', messageRouter);

// Catch-all for all otherwise unmatched paths
// app.get('/{*splat}', (req, res) => res.send('404 - Sorry, page does not exist'));
app.use((req, res) => {
    res.status(404).send('404 - Sorry, page does not exist');
});

// Error middleware function
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));