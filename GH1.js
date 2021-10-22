function humanReadable(seconds) {
  var HH = parseInt(seconds/60/60);
// if (HH >99){HH=99};
  let MM = parseInt(seconds/60%60);
  let SS = parseInt(seconds = seconds % 60);
var pad = function(e){return e < 10 ?"0"+e:e;}
return (pad(HH) + ":" +pad(MM) + ":" + pad(SS));
}