const fetch = require('node-fetch');

async function getRandomUser(channel) {
    const response = await fetch(`https://tmi.twitch.tv/group/user/${channel}/chatters`);
    const data = await response.json();
    const viewers = data.chatters.viewers;
    const randomViewer = viewers[Math.floor(Math.random() * viewers.length)];
    return randomViewer;
}

module.exports = async (req, res) => {
    const channel = req.query.channel;
    const user = await getRandomUser(channel);
    res.send(`@${user}`);
};
