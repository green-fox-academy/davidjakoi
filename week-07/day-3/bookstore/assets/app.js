window.onload = () => {
  const host = 'http://localhost:3000';
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/books`, true);

  http.onload = () => {
    const context = JSON.parse(http.response);
    let myDiv = document.querySelector('.list');
    myDiv.innerText = context[0].book_name;

  };
  http.send();

}