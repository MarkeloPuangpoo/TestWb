function redirectToSong() {
  // Get the input value and convert it to lowercase
  var songName = document.querySelector('input[name="text"]').value.toLowerCase();

  // Create the URL for the song.html page in the lyrics folder
  var url = 'lyrics/' + songName + '.html';

  // Open the song.html page in a new window/tab
  window.open(url);
}
