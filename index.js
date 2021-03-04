// var myImage = document.querySelector('img');
// var myRequest = new Request('../images/fetch.gif');

// fetch(myRequest).then(function(response) {
//   console.log("response status:", response.status); // returns 200
//   response.blob().then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });
// });



var myImage = document.querySelector('img');

var myRequest = new Request('index.gif');

fetch(myRequest)
.then(function(response) {
  console.log(response.type);
  console.log(response.url);
  console.log(response.useFinalURL);
  console.log(response.status);
  console.log(response.ok);
  console.log(response.statusText);
  console.log(response.headers);
  if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  console.log("objectURL: ", objectURL);
  myImage.src = objectURL;
})
.catch(function(error) {
  var p = document.createElement('p');
  p.appendChild(
    document.createTextNode('Error: ' + error.message)
  );
  document.body.insertBefore(p, myImage);
});

// var myBlob = new Blob();
// var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" }
// var myResponse = new Response(myBlob, init);
