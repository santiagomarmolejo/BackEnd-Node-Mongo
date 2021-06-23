import express from "express";
var routerTasks=  require ("./routes/Tasks");

var app = express();

app.use("/",routerTasks);

export default app;