import express, { Request, Response, NextFunction } from "express";
export const router = express.Router();

/* GET home page. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Express" });
});

console.log("girl");
