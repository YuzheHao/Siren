function activate(video_path) {

    var bv = new Bideo();
    var videox = document.querySelector('#background_video');
    var bodyx = document.querySelector('body');
    if ($("#background_video")[0].childElementCount > 0) {
        $("#background_video")[0].removeChild($("#background_video")[0].firstChild)
    };


    bv.init({
        // Video element
        videoEl: videox,

        // Container element
        container: bodyx,

        // Resize
        resize: true,

        // autoplay: false,

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        // playButton: document.querySelector('#play'),
        // pauseButton: document.querySelector('#pause'),

        // Array of objects containing the src and type
        // of different video formats to add
        src: [{
            src: video_path,
            type: 'video/mp4'
        }],

        // What to do once video loads (initial frame)
        // onLoad: function() {
        //     document.querySelector('#video_cover').style.display = 'none';
        // }
    });
};

// function change_records(record) {
//     $("#background_video")[0].remove(document.querySelector('#background_video').firstChild)
//     bv.init({
//         src: [{
//             src: video_path,
//             type: 'video/mp4'
//         }],
//     });
// }