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
      <a class="message-item__name" href="./detail.html?id=${msgObject.id}">${msgObject.name}</a>
      <div class="message-item__content_wrapper">
        <img class="message-item__avatar" src="${msgObject.avatar}" />
        <p class="message-item__content">${msgObject.content}</p>
      </div>
    </div>
  `;
  return msgItemString;
}

getAllMessengers();

function editData() {
  let msgIdEl = document.getElementById("msgId");
  let contentEl = document.getElementById("content_update");

  let id = msgIdEl.value;
  let content = contentEl.value;

  fetch(`${ROOT_API}/messenger/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert("Update success");
      window.location.reload();
    });
}

function addData() {
  let userNameEl = document.getElementById("userName");
  let contentSendEl = document.getElementById("content_send");
  let avatarEl = document.getElementById("avatar");

  let name = userNameEl.value;
  let content = contentSendEl.value;
  let avatar = avatarEl.value;

  let payload = {
    name,
    content,
    avatar,
  };

  fetch(`${ROOT_API}/messenger`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert("Add success");
      window.location.reload();
    });
}

function deleteData() {
  let deleteIdEl = document.getElementById("delete_id");
  let id = deleteIdEl.value;

  fetch(`${ROOT_API}/messenger/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert("Delete success");
      window.location.reload();
    });
}
