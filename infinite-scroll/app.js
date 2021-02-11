window.addEventListener("load", init);
let limit = 3;
let page = 2;

function init() {
  let findBox = document.getElementById("find-box");
  findBox.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      event.preventDefault();
      onFilterPost();
    }
  });

  showPost();

  window.addEventListener("scroll", () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - 5) {
      showLoading();
      //console.log("scrollTop:",scrollTop,"scrollHeight",scrollHeight,"clientHeight:",clientHeight);
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
  let container = document.getElementById("infinite-con");
  let posts = await getPost();
  //console.log(posts);
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

async function allPost() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let data = await res.json();
  return data;
}

async function onFilterPost() {
  let findBox = document.getElementById("find-box").value.toLowerCase();
  let container = document.getElementById("infinite-con");
  let allPosts = await allPost();
  console.log("filtered");

  let matchedPost = allPosts.filter((post) => {
    return post.title.toLowerCase().includes(findBox);
  });
  console.log(matchedPost);

  container.innerHTML = matchedPost
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
