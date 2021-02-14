const app = require("./app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("COM6", { baudRate: 9600 });

const parser = new Readline({ delimiter: "\n" });
port.pipe(parser);

port.on("data", (data) => console.log(data.toString()));

io.on("connection", (socket) => {
  console.log("Connected Client");
  socket.on("moveServo", (data) =>
    setTimeout(() => {
      let instruction = data + "\n";
      console.log("instruction", instruction);
      port.write(instruction);
    }, 2000)
  );
});

http.listen(5001, () => console.log("Listening on: ", 5001));
