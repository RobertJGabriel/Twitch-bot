var tmi = require('tmi.js');

const options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },

  identity: {
    username: "not_not_a_bot_i_swear",
    password: "oauth:af2eo30pnp7szeu5gljf8ltzm5ndo0"
  },
  channels: ['robertjamesgabriel','courtneymakesvideo']
}

let client = new tmi.client(options);

// This connects to twitch
client.connect();

// This runs as soon as there is a connection
client.on("connected", function (address, port) {
  client.action("channel name", "You have summoned me ");
});


client.on("chat", function (channel, user, message) {

  if (message === "Twitter") {
    client.say(channel, "WOW!!! @" + user["display-name"])
  }

  if (message.toLowerCase().indexOf("wow") >= 0){
    client.say(channel, "Hey 👋!!! @" + user["display-name"] + ' give Robert James Gabriel a shout out for building a twitch bot live on stream. This is for fun :) all love and a huge fan <3')
  }

});
