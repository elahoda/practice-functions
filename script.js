var startMyDay = function () {
  console.log(`Time for coffee and and shower`);
};
startMyDay();

var favoriteCookie = function (cookie) {
  console.log(`My favorite cookie is ${cookie}`);
};
favoriteCookie("chocolate Chip");

var introduce = function (name, occupation) {
  console.log(`My name is ${name} and I work as a ${occupation}`);
};
introduce("Eric", "Realtor");

var hydrationFeedback = function (numGlasses) {
  var numGlasses = Number(prompt("How many glass of water did you have?"));
  if (numGlasses >= 8) {
    console.log(`Way to go that's a lot of water`);
  } else console.log("Not bad, try to drink more tomorrow");
};
hydrationFeedback();
