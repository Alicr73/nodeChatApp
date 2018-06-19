var TAG = '-------------server.js ';
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const publicPath = path.join(__dirname,'../public');

 var app = express();
 var server = http.createServer(app);
 var io = socketIO(server);

const port = process.env.PORT || 3000;
 app.use(express.static(publicPath));

        io.on('connection',(socket)=>{
              console.log('connected to client');

              // socket.emit('newEmail',{
              //  from:'alifattahiproject',
              //     text:'WHats up?',
              //     created:123
              // });

              socket.on('createEmail',(newEmail)=>{
                console.log('created Email',newEmail);
              });

              socket.on('createMessage',(message)=>{
               console.log('message created',message);
               io.emit('newMessage',{
                 "from":message.from,
                 "text":message.text
               });
              });

              socket.on('disconnect',()=>{
                  console.log('disconnected from client');
              });

              // socket.emit('newMessage',{
              //  "from":"john",
              //     "text":"salam man az server message dadam b client"
              // });
        });  //an event listener


    server.listen(port,()=>{
     console.log(TAG+'has run on the port '+port);
    });