export const toRelativeTime = (previous) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;
  let elapsed = Date.now() - previous;
  let val = 0;

  if (elapsed < msPerMinute) {
    val = Math.floor(elapsed/1000);
    return  (val == 1) ? val + ' second ago' : val + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    val = Math.floor(elapsed/msPerMinute);
    return  (val == 1) ? val + ' minute ago' : val + ' minutes ago';
  }

  else if (elapsed < msPerDay ) {
    val = Math.floor(elapsed/msPerHour);
    return  (val == 1) ? val + ' hour ago' : val + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    val = Math.floor(elapsed/msPerDay);
    return  (val == 1) ? val + ' day ago' : val + ' days ago';
  }

  else if (elapsed < msPerYear) {
    val = Math.floor(elapsed/msPerMonth);
    return  (val == 1) ? val + ' month ago' : val + ' months ago';
  }

  else {
    val = Math.floor(elapsed/msPerYear);
    return  (val == 1) ? val + ' year ago' : val + ' years ago';
  }
}
