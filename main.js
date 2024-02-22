function sendMail() {
  let subject = document.getElementById("subject").value;
  let text = document.getElementById("text").value;
  const link =
    "mailto:test@adress.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(text);
  window.open(link);
}
