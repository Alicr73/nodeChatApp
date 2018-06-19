var socket = io();
        socket.on('connect',function(){
            console.log('connected to the server');

            // socket.emit('createMessage',{
            //    to:'MAn',
            //    text:'Salam',
            //    time:213
            // });
        });



        socket.on('disconnect',function(){
          console.log('Disconnected from server');
});

        socket.on('newEmail',function (email) {
           console.log('new Email',email);
        });
        socket.on('newMessage',function (message) {
           console.log('newMessage from server',message);
        });