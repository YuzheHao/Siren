function activate(RecordName) {

    var bv = new Bideo();
    var videox = document.querySelector('#background_video');
    var bodyx = document.querySelector('body');
    // var coverx = document.querySelector('#video_cover').
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
            src: "/Users/Yuzhe/Music/Monster\ Siren\ Records/" + RecordName + ".mp4",
            // src: "../resource/" + RecordName + ".mp4",
            type: 'video/mp4'
        }],

        // What to do once video loads(initial frame)
        // onLoad: function() {
        //     coverx.style.display = 'none';
        // }
    });
};

var No001 = "SPEED OF LIGHT";
var No002 = "Boiling Blood";
var No003 = "Renegade";
var No004 = "Sparkling Hydraulics";
var No005 = "El Brillo Solitario";
var No006 = "Evolutionary Mechanization";
var No007 = "Reconnection";
var No008 = "Confront";
var No009 = "Lithos";


// <p>💿···</p>

function switch_to(RecordCode) {
    for (var i = $("div.record").length - 1; i >= 0; i--) {
        if ($("div.record")[i].childElementCount > 0) {
            $("div.record")[i].removeChild($("div.record")[i].firstChild)
        };
    }
    $("#" + RecordCode)[0].innerHTML = "<p>💿··· </p>" + $("#" + RecordCode)[0].innerHTML

    RecordName = eval(RecordCode)
    activate(RecordName)
}