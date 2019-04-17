var playlist = {
  deadmau5: "strobe",
};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist
}