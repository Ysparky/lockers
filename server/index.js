const app = require("./app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("COM6", { baudRate: 9600 });

const parser = new Readline({ delimiter: "\n" });
port.pipe(parser);

var lockerIdx = 0;

io.on("connection", (socket) => {
  console.log("Connected Client");

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
          socket.emit("closeLocker");
          console.log("Locker has been closed");
        } else {
          //executes S-00
          setTimeout(() => {
            let instruction = "S-00\n";
            console.log("Doing instruction", instruction);
            port.write(instruction);
          }, 500);
        }
      }
    }
  });

  socket.on("moveServo", (data) => {
    console.log("data received", data);
    let instruction = "L-0" + data + "\n";
    setTimeout(() => {
      console.log("Doing instruction", instruction);
      port.write(instruction);
    }, 500);
    setTimeout(() => {
      lockerIdx = data;
      let instruction = "S-00\n";
      console.log("Doing instruction", instruction);
      port.write(instruction);
    }, 3000);
  });
});

http.listen(5001, () => console.log("Listening on: ", 5001));
