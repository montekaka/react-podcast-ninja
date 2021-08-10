export const getHHMMSSFromSeconds = (position) => {
  let totalSeconds = Math.round(position);
  
  const hours = (totalSeconds - totalSeconds % 3600) / 3600;
  totalSeconds = (totalSeconds - hours * 3600);
  const minutes =  (totalSeconds - totalSeconds % 60) / 60;
  const seconds = (totalSeconds - minutes * 60);

  const padWithZero = (number) => {
    const string = number.toString();
    if (number < 10) {
      return '0' + string;
    }
    return string;
  };

  return padWithZero(hours) + ':' + padWithZero(minutes) + ':' + padWithZero(seconds);
}

export const getSecondsFromHHMMSS = (positionString) => {
  const positionsStrings = positionString.split(":");
  if(positionsStrings.length === 0) {
    return 0;
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const seconds = positionsStrings.reverse().map((str, index) => {
    return Number(str) * Math.pow(60, index)
  }).reduce(reducer)

  return seconds;
}