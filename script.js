var ids_done = [
"14759",
"7615",
"7537",
"7535",
"7541",
"7570",
"7534",
"7590",
"7547",
"7545",
"7550",
"7572",
"7538",
"7544",
"7577",
"7573",
"7586",
"7582",
"7562",
"7526"
]; 

var ids_ignore = [
"7523",
"7602",
"7601",
"7603",
"7611",
"7568",
"7615",
"7613",
"7542"
];



var ids_wip = [
]

$( "record" ).each(function( index ) {
  var char_id = $( this ).find("a")[0].href.split("/").pop();
  if(ids_done.includes(char_id)) {
    $( this ).addClass("done");
  }
  if(ids_ignore.includes(char_id)) {
    $( this ).addClass("ignore");
  }
  if(ids_wip.includes(char_id)) {
    $( this ).addClass("wip");
  }
});