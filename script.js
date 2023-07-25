function record() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  // recognition.lang = "hi-GB";
  // recognition.lang = "pa-GB";
  // recognition.lang = "ur-GB";
  // recognition.lang = "bn-GB";
  recognition.onresult = function (event) {
    document.getElementById("speechToText").value =
      event.results[0][0].transcript;
  };
  recognition.start();
}
