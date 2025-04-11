var ids_done = new Map();
ids_done.set("14759","487718");
ids_done.set("7526","535378");
ids_done.set("7562","533197");
ids_done.set("7582","527097");
ids_done.set("7577","524983");
ids_done.set("7538","519309");
ids_done.set("7537","517448");
ids_done.set("7541","516115");
ids_done.set("7573","513263");
ids_done.set("7535","512016");
ids_done.set("7590","510387");
ids_done.set("7570","500417");
ids_done.set("7550","496197");
ids_done.set("7572","489033");
ids_done.set("7547","482946");
ids_done.set("7534","477537");
ids_done.set("7586","471953");
ids_done.set("7545","468121");
ids_done.set("7544","463550");
ids_done.set("7574","537582");
ids_done.set("7563","539940");
ids_done.set("7580","542340");
ids_done.set("7528","544852");
ids_done.set("7540","551014");
ids_done.set("7548","556553");
ids_done.set("7536","558351");
ids_done.set("7599","561571");
ids_done.set("7558","563667");
ids_done.set("7529","565659");
ids_done.set("7546","566666");
ids_done.set("7557","569797");
ids_done.set("7595","571480");
ids_done.set("7584","573703");
ids_done.set("7585","576457");
ids_done.set("7581","578768");
ids_done.set("7609","583327");
ids_done.set("7576","587647");

var ids_ignore = [
"7523",
"7602",
"7601",
"7603",
"7611",
"7568",
"7615",
"7613",
"7542",
"7549",
"7604",
"7579"
];



var ids_wip = [

]

$( "record" ).each(function( index ) {
  var char_id = $( this ).find("a")[0].href.split("/").pop();
  $( this ).find("a")[0].href = "#";
  if(ids_done.has(char_id)) { // replaces has with includes for array
    $( this ).addClass("done");
    $( this ).find("a")[0].href = "https://gamebanana.com/mods/".concat(ids_done.get(char_id));
  }
  if(ids_ignore.includes(char_id)) {
    $( this ).addClass("ignore");
  }
  if(ids_wip.includes(char_id)) {
    $( this ).addClass("wip");
  }
});


if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")
    $('body').addClass("local");

let counter = 1;
$('body').attr("bgindex",counter);

function incrementCounter() {
    
    counter++;
    $('body').addClass("change");

setTimeout(function() {
$('body').attr("bgindex",counter);
}, 1000);

setTimeout(function() {
$('body').removeClass("change");
}, 2000);

    if (counter >= 9) {
        counter = 1;
    }
}

setInterval(incrementCounter, 9000);
