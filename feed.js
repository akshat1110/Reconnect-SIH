//Dom elements
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarwrapper = document.querySelector(".sidebar-wrapper");
const xBtn = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

/****************************************************/

// sidebar
user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sidebarwrapper.classList.add("sidebar-wrapper-display");
});

xBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sidebarwrapper.classList.remove("sidebar-wrapper-display");
});

// darkmode

const darkElements1 = document.querySelectorAll(".dark-mode-1");
const darkElements2 = document.querySelectorAll(".dark-mode-2");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darkElements1).map((darkEl1) =>
    darkEl1.classList.toggle("dark-1")
  );

  Array.from(darkElements2).map((darkEl2) =>
    darkEl2.classList.toggle("dark-2")
  );
});

showfeeds();
let posts = document.getElementById("posts");
posts.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let feeds = localStorage.getItem("feeds");
  if (feeds == null) {
    feedsObj = [];
  } else {
    feedsObj = JSON.parse(feeds);
  }
  feedsObj.push(addTxt.value);
  localStorage.setItem("feeds", JSON.stringify(feedsObj));
  addTxt.value = "";
  showfeeds();
});

function showfeeds() {
  
  var firestore = firebase.firestore();

  //Variable to access database collection
  const db = firestore.collection("Users");
  let html = "";

  console.log(
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    db
  );
  firestore
    .collection("posts")
    .get()
    .then((snapshot) => {
      console.log(
        "111111111111111111111111111111111111111111111111111111",
        snapshot.docs
      );
      snapshot.docs.forEach((doc) => {
        const fn = doc.data();
        console.log(
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          fn["creator"]
        );
        var creator = fn["creator"];
        var post_data = fn["text"];
        html += `
                      <div class="noteCard my-2 mx-2 card" >
                               <div class="card-body">
                               <button id=""onclick="deleteNote(this.id)" class="btn btn-danger" >User</button>
                                   <p class="card-text"> ${post_data}  </p>
                                   <ul>
                                   <li><a href="#"><i class="fas fa-comment"></i></a></li>
                                   </ul>
                                   

          
                              </div>
                          </div>`;
      });
      let feedsElm = document.getElementById("feeds");
      feedsElm.innerHTML = html;
    });
}
//   let feeds = localStorage.getItem("feeds");
//   if (feeds == null) {
//     feedsObj = [];
//   } else {
//     feedsObj = JSON.parse(feeds);
//   }
//   let html = "";
//   feedsObj.forEach(function(element,index) {

//     html += `
//             <div class="noteCard my-2 mx-2 card" style="width: 45rem;">
//                     <div class="card-body">
//                         <p class="card-text"> ${element}</p>
//                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger" >Delete Post</button>

//                     </div>
//                 </div>`;
//   });
//   let feedsElm = document.getElementById("feeds");
//   if (feedsObj.length != 0) {
//     feedsElm.innerHTML = html;
//   } else {
//     feedsElm.innerHTML = `No post yet`;
//   }

function deleteNote(index) {
  let feeds = localStorage.getItem("feeds");
  if (feeds == null) {
    feedsObj = [];
  } else {
    feedsObj = JSON.parse(feeds);
  }

  feedsObj.splice(index, 1);
  localStorage.setItem("feeds", JSON.stringify(feedsObj));
  showfeeds();
}

function sendData() {
  const addTxt = document.getElementById('addTxt');
  console.log("11111111111111111111111111", addTxt.length, addTxt.length == 0)
  if(addTxt.value.length == 0) {
    alert("Please enter values in post text box")
  }
  else{
  var  database = firebase.firestore();
  var posts = database.collection('posts');
  posts.add({
    creator: "Tokyo",
    text: addTxt.value
})
}


}

