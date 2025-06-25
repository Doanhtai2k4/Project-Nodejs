/**
 * gọi ra thư viện sử dụng
 * ưu tiên sử dụng const
 * gọi đến thư viện express bằng require
 */
// const express = require("express");

import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";
// tạo ra 1 đối tượng
const app = express();
const  PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')  //__dirname là đường dẫn tuyện đối tại vị trí file hiện tại
/**
 * 1 trang web nhiều đường link url
 * sử dụng arrow function ( hàm mũi tên)
 * cần phải có req(tức là require) , và res(tức là responsive)
 */
// app.get("/",(req,res) => {

//     res.render("home.ejs")
// })
// app.get("/anhtai",(req,res) => {

//     res.send("Hello Tai") 
// })

//config routter
webRoutes(app);

app.use(express.static("public"));      // nói với express là cho phep truy cap toi thu muc public trang thai tĩnh
/** 
 * trên máy tính chúng ta có nhiều tiến trình ( nhiều 0 gian  )
 * cần nói cho ứng dụng biết  địa chỉ
 */
app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`);
    console.log(__dirname + '/views')
})