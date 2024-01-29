const solution = (play_list, listen_time) => {
  const totalTime = play_list.reduce((acc, cur) => acc + cur, 0);

  if (totalTime <= listen_time) return play_list.length;

  const newPlayList = [...play_list, ...play_list];
  let maxSongs = 0;

  for (let i = 0; i < play_list.length; i++) {
    const availableSongs = checkAvailableSongs(i, newPlayList, listen_time);

    if (availableSongs > maxSongs) maxSongs = availableSongs;
  }

  return maxSongs;
};

const checkAvailableSongs = (startIndex, newPlayList, listen_time) => {
  let timeSpent = listen_time - 1;
  let availableSongs = 1;
  let currentIndex = startIndex + 1;

  while (timeSpent > 0) {
    timeSpent -= newPlayList[currentIndex];
    currentIndex++;
    availableSongs++;
  }

  return availableSongs;
};
