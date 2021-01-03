function activate(RecordName) {

    var bv = new Bideo();
    var videox = document.querySelector('#background_video');
    var bodyx = document.querySelector('body');
    var coverx = document.querySelector('#video_cover');

    // var playx = document.querySelector('#play');
    // var pausex = document.querySelector('#pause');
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

        // playButton: playx,
        // pauseButton: pausex,

        // Array of objects containing the src and type
        // of different video formats to add
        src: [{
            src: "/Users/Yuzhe/Music/Monster\ Siren\ Records/" + RecordName + ".mp4",
            type: 'video/mp4'
        }],

        // What to do once video loads(initial frame)
        // onLoad: function() {
        //     coverx.style.display = 'none';
        // }
    });
};

function switch_to(RecordCode) {
    for (var i = $("div.record").length - 1; i >= 0; i--) {
        if ($("div.record")[i].childElementCount > 0) {
            $("div.record")[i].removeChild($("div.record")[i].firstChild)
        };
    }
    activate($("#" + RecordCode)[0].textContent)
    $("#" + RecordCode)[0].innerHTML = "<p>💿&nbsp</p>" + $("#" + RecordCode)[0].innerHTML
}

function homing() {
    for (var i = $("div.record").length - 1; i >= 0; i--) {
        if ($("div.record")[i].childElementCount > 0) {
            $("div.record")[i].removeChild($("div.record")[i].firstChild)
        };
    }
    $("#container")[0].removeChild($("#container")[0].children[1]);
    $("#container").append("<video id='background_video' loop></video>");
}