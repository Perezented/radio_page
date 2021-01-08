const io = require("socket.io")({
  cors: {
    origin: "*"
  }
});
let users = {};
io.on("connection", (socket) => {
  console.log(`connect: ${socket.id}`);

  socket.on("hello!", () => {
    console.log(`hello from ${socket.id} | ${new Date()}`);
  });

  // new user connected
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });
  // send message object
  socket.on("send-chat-message", (message) => {
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id]
    });
  });
  // disconnected
  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});

io.listen(3001);

// setInterval(() => {
//   io.emit("message", new Date().toISOString());
// }, 1000);
