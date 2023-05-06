import * as dotenv from "dotenv";
/**
 * Don't load the dotenv package when in production
 * Use the default provided env accessor by host machine.
 */

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express, { Request, Response, NextFunction } from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});