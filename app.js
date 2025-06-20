/**
 * gọi ra thư viện sử dụng
 * ưu tiên sử dụng const
 * gọi đến thư viện express bằng require
 */
const express = require("express");
// tạo ra 1 đối tượng
const app = express();
const  PORT = 8080;

/**
 * 1 trang web nhiều đường link url
 * sử dụng arrow function ( hàm mũi tên)
 * cần phải có req(tức là require) , và res(tức là responsive)
 */
app.get("/",(req,res) => {

    res.send("Hello world !") 
})
app.get("/anhtai",(req,res) => {

    res.send("Hello Tai") 
})
/** 
 * trên máy tính chúng ta có nhiều tiến trình ( nhiều 0 gian  )
 * cần nói cho ứng dụng biết  địa chỉ
 */
app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
})