import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', function(currentTime) {
    const second = currentTime.seconds;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(second));
});

player.setCurrentTime(localStorage.getItem(LOCAL_KEY)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


player.on('timeupdate', throttle(function(currentTime){
    localStorage.setItem('seconds', JSON.stringify(currentTime.seconds))
}, 10000));


