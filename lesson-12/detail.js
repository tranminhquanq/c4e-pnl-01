const ROOT_API = "https://629e094dc6ef9335c0ad2256.mockapi.io/api/v1";

const searchParams = new URLSearchParams(window.location.search);
const currentMsgId = searchParams.get("id");

function getDetailMessage(id) {
  const request = fetch(`${ROOT_API}/messenger/${id}`);
  request
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      //
    });
}

getDetailMessage(currentMsgId);
