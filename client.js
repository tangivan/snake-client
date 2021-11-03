const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write("Name: IT");
    let delay = 0;
    let moves = ["Move: up", "Move: up", "Move: right", "Move: up", "Move: down"];
    // for (let i = 0; i < 5; i++) {
    //   setTimeout(() => {
    //     conn.write(moves[i]);
    //   }, delay * 1000)
    //   delay += 100;
    // }
    let counter = 0;
    let id = setInterval(() => {
      conn.write("Move: up")
      counter++;
      if (counter === 5) {
        clearInterval(id);
      }
    }, 500);
  })

  return conn;
};

module.exports = { connect };