document.querySelector('#sort-btn').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api?req=house`)
  const data = await res.json()
  
  console.log(data);
  document.querySelector("#house").textContent = data.house
  document.querySelector("#sortingHat").src = data.imgUrl
  
}

