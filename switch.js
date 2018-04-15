
for (var i = 0; document.images.length; i++) {
  // Change the url to anyting you want!
  var text = document.images[i].src;
  result = text.replace("postimg.org", "postimg.cc");
  document.images[i].src = result;
};
