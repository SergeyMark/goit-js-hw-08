import Player from '@vimeo/player';


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

// const KEY_LOCAL_STORAGE = "videoplayer-current-time";

// player.on('timeupdate', function() {
//     const videoplayerCurrentTime = "videoplayer-current-time";

//     function addLocalStorage(){
//         localStorage.setItem(KEY_LOCAL_STORAGE, videoplayerCurrentTime)
//     }
// });

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });