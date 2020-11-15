var cta = [];
var body = document.getElementsByName('body')[0];
var colourDiff = function(elm){
  elmC = window.getComputedStyle(elm).getPropertyValue('background-color');
  bodyC = window.getComputedStyle(body).getPropertyValue('background-color');
  return Math.sqrt((getRGB(elmC[1]) - getRGB(bodyC[1])**2) + (getRGB(elmC[2]) - getRGB(bodyC[2])**2) + (getRGB(elmC[3]) - getRGB(bodyC[3])**2));
}
var getPath = function(a){
  return getPathTo(a);
}
function getRGB(str){
  var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
  rgb = match[1], match[2], match[3];
  return rgb
}
