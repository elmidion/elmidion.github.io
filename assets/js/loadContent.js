import fetch from "node-fetch";

function loadContent(pageUrl) {
  const response = await fetch(pageUrl);
  const content = await response.text();
  document.getElementById("content").innerHTML = content;
}