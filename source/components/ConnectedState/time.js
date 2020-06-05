export const toRelativeTime = (previous) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;
  let elapsed = Date.now() - previous;

  if (elapsed < msPerMinute) {
    return Math.floor(elapsed/1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return Math.floor(elapsed/msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay ) {
    return Math.floor(elapsed/msPerHour ) + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.floor(elapsed/msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return 'approximately ' + Math.floor(elapsed/msPerMonth) + ' months ago';
  }

  else {
    return 'approximately ' + Math.floor(elapsed/msPerYear ) + ' years ago';
  }
}
