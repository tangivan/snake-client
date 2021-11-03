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
    // let counter = 0;
    // let id = setInterval(() => {
    //   conn.write("Move: up")
    //   counter++;
    //   if (counter === 5) {
    //     clearInterval(id);
    //   }
    // }, 500);
  })

  return conn;
};

module.exports = { connect };