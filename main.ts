import express from "express";
import bodyParser from "body-parser";
import { getRelevantRules } from "./utils/getRelevantRules";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/callback", (req, res) => {
  const userMessage = req.body.content.text;

  const result = getRelevantRules(userMessage);

  res.json({
    content: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
