// document.querySelectorAll('.ssbats-share-popup').forEach( item =>
//     item.addEventListener('click', (event) => {
//     var window_size = "width=530,height=400";
//     var social = item.href.split("/")[2];
//     switch(social) {
//         case "www.facebook.com":
//             window_size = "width=530,height=640";
//             break;
//         case "www.twitter.com":
//             window_size = "width=585,height=261";
//             break;
//         case "www.linkedin.com":
//             window_size = "width=585,height=600";
//             break;
//         case "tumblr.com":
//             window_size = "width=540,height=600";
//             break;
//         case "www.reddit.com":
//             window_size = "width=600,height=600";
//             break;
//     }
//     window.open(item.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
//     event.preventDefault();
//     return false;
// }));

// document.querySelectorAll('.ssbats-social-share a').forEach( item => {
//   item.href = item.href.replace( "URL_HERE", document.URL);
// });