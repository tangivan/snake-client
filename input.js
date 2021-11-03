//Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 't') {
    connection.write("Say: pog")
  }
  if (key === 'g') {
    connection.write("Say: woof~ woof~");
  }
  if (key === 'v') {
    connection.write("Say: meow~~ meow~~");
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };