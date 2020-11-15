text = [];
h1s = document.getElementsByTagName("h1");
h2s = document.getElementsByTagName("h2");
h3s = document.getElementsByTagName("h3");
h4s = document.getElementsByTagName("h4");
h5s = document.getElementsByTagName("h5");
h6s = document.getElementsByTagName("h6");
ps = document.getElementsByTagName("p");
for (i = 0; i < h1s.length; i++) {
	text = text + " " + h1s[i].innerText
}
for (i = 0; i < h2s.length; i++) {
	text = text + " " + h2s[i].innerText
}
for (i = 0; i < h3s.length; i++) {
	text = text + " " + h3s[i].innerText
}
for (i = 0; i < h4s.length; i++) {
	text = text + " " + h4s[i].innerText
}
for (i = 0; i < h5s.length; i++) {
	text = text + " " + h5s[i].innerText
}
for (i = 0; i < h6s.length; i++) {
	text = text + " " + h6s[i].innerText
}
for (i = 0; i < ps.length; i++) {
	if (i % 3) {
		text = text + " " + ps[i].innerText
	}
};
return text;
