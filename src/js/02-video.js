// adding a lodash throttle 

import throttle from 'lodash.throttle';

// adding refs

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// adding player eventlistener

player.on('timeupdate', throttle(onPlay, 1000));

// adding function to save vplayer current time

function onPlay({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

// adding method to start player from the previous time

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));