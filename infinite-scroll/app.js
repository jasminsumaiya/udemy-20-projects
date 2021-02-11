window.addEventListener("load", init);
let limit = 3;
let page = 1;

function init() {
  showPost();

  window.addEventListener("scroll", () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - 5) {
      showLoading();

      console.log(
        "scrolling down",
        "scrollTop:",
        scrollTop,
        "scrollHeight",
        scrollHeight,
        "clientHeight:",
        clientHeight
      );
    }
  });
}

function showLoading() {
  let loader = document.getElementById("loader");
  loader.classList.add("show");
  setTimeout(() => {
    loader.classList.remove("show");
    setTimeout(() => {
      page = page + 1;
      showPost();
      console.log("scrolled");
    }, 1000);
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
  console.log(posts);
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
