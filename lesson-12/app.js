const ROOT_API = "https://629e094dc6ef9335c0ad2256.mockapi.io/api/v1";

function getAllMessengers() {
  const request = fetch(`${ROOT_API}/messenger`);
  request
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderMessages(data);
    });
}

function getDetailMessage(id) {
  const request = fetch(`${ROOT_API}/messenger/${id}`);
  request
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //  renderMessages(data);
      console.log(data);
    });
}

getDetailMessage(9);

function renderMessages(messages) {
  for (let i = 0; i < messages.length; i++) {
    let msgItem = messages[i];
    let msgHtml = createMessageItem(msgItem);
    document.getElementById("root").innerHTML += msgHtml;
  }
}

function createMessageItem(msgObject) {
  const msgItemString = `
    <div class="message-item">
      <h4 class="message-item__name">${msgObject.name}</h4>
      <div class="message-item__content_wrapper">
        <img class="message-item__avatar" src="${msgObject.avatar}" />
        <p class="message-item__content">${msgObject.content}</p>
      </div>
    </div>
  `;
  return msgItemString;
}

getAllMessengers();
