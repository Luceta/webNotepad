import fetch from "node-fetch";

export const getMain = (req, res, next) => {
  res.render("home");
};

export const saveNote = (req, res, next) => {
  console.log(req.body, "request body");
};
