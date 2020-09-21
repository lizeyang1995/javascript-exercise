function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('get', url);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      successCallback(xhr.responseText);
    } else {
      errorCallback(xhr.statusText);
    }
  };
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
