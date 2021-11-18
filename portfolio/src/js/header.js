var i = 0;
var txt = 'Web developer'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    console.log(document.getElementById("demo"))
    document.getElementById("demo") += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()