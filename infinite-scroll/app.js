window.addEventListener("load", init);
let limit = 2;
let page = 2;

function init() {
  let inputBox = document.getElementById("find-box");
  inputBox.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      event.preventDefault();
      onFilterPost();
    }
  });

  showPost();

  let limitInputBox = document.getElementById("limit-input");
  limitInputBox.addEventListener("input", (e) => {
    if (limitInputBox.value.trim() != "") {
      limit = parseInt(limitInputBox.value);
      showPost();
      return;
    }
  });

  window.addEventListener("scroll", () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (limitInputBox.value.trim() == "") {
      if (scrollTop + clientHeight == scrollHeight) {
        showLoading();
        //console.log("scrollTop:",scrollTop,"scrollHeight",scrollHeight,"clientHeight:",clientHeight);
      }
    }
  });
}

function showLoading() {
  let loader = document.getElementById("loader");
  loader.classList.add("show");
  setTimeout(() => {
    loader.classList.remove("show");
    setTimeout(() => {
      limit = limit + 3;
      showPost();
      //console.log("scrolled");
    }, 200);
  }, 3000);
}

async function getPost() {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  let data = await res.json();
  return data;
}

async function showPost() {
  let posts = await getPost();
  console.log(posts);
  renderPost(posts);
}

async function allPost() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  return data;
}

async function onFilterPost() {
  let inputBoxValue = document.getElementById("find-box").value.toLowerCase();
  let allPosts = await allPost();
  console.log("filtered");

  let matchedPost = allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(inputBoxValue) ||
      post.body.toLowerCase().includes(inputBoxValue)
    );
  });
  //console.log(matchedPost);
  renderPost(matchedPost);
}

function renderPost(posts) {
  let container = document.getElementById("infinite-con");

  container.innerHTML = posts
    .map((post, index) => {
      return `<div class="sl-no" id=""sl-no">${index + 1}</div>
                                <div class="content">
                                    <strong>
                                        ${post.title}
                                    </strong>
                                    <p>
                                        ${post.body}
                                    </p>
                                </div>`;
    })
    .join(" ");
}
