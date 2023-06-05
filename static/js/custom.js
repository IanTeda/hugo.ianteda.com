/* Custom JS */
var content = document.getElementById("content");
var links = content.getElementsByTagName("a");
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
     links[i].target = '_blank';
     links[i].rel = "nofollow noopener noreferrer";
   }
}
