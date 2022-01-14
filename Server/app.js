const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('socket.io practice');
});

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    credentials: true
  }
});

io.on('connection', (socket) => {
  socket.on('message', ({name, message}) => {
    io.emit('message', {name, message});
    console.log(name, message);
  });
});

server.listen(4000, () => {
  console.log('server 4000 port');
});
