const app = require("./app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("COM6", { baudRate: 9600 });

const parser = new Readline({ delimiter: "\n" });
port.pipe(parser);

var lockerIdx = 0;

port.on("data", (data) => {
  let line = data.toString();
  //print
  console.log(line);
  if (lockerIdx != 0) {
    let splittedLine = line.split(" ");
    if (splittedLine.length > 2) {
      if (splittedLine[lockerIdx] == 0) {
        //socket emit && clean locker idx value
        lockerIdx = 0;
        socket.emit('closedLocker');
        console.log("Locker has been closed");
      } else {
        //executes S-00
        setTimeout(() => {
          let instruction = "S-00\n";
          console.log("Doing instruction", instruction);
          port.write(instruction);
        }, 2000);
      }
    }
  }
});

io.on("connection", (socket) => {
  console.log("Connected Client");
  socket.on("moveServo", (data) => {
    console.log("data received", data);
    lockerIdx = data;
    let instruction = "L-0" + data + "\n";
    setTimeout(() => {
      console.log("Doing instruction", instruction);
      port.write(instruction);
    }, 2000);
    setTimeout(() => {
      let instruction = "S-00\n";
      console.log("Doing instruction", instruction);
      port.write(instruction);
    }, 2000);
  });
});

http.listen(5001, () => console.log("Listening on: ", 5001));

//ejecutar el comando S-00 luego de que se envie un comando donde se movió el servo
