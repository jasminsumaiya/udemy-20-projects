window.addEventListener("load", init);

function init() {
  ///home page
  let homePage = document.getElementById("home");
  homePage.addEventListener("click", () => {
    homePage.classList.add("active");
    //-----
    bookPage.classList.remove("active");
    userPage.classList.remove("active");
    issuedPage.classList.remove("active");
    //----
    let contentBox = document.getElementById("content-box");
    contentBox.innerHTML = `<h2 id="page">Home Page!!!</h2>`;
  });

  ///book page
  let bookPage = document.getElementById("books");
  bookPage.addEventListener("click", onClickBookPage);

  ///user page
  let userPage = document.getElementById("users");
  userPage.addEventListener("click", onClickUserPage);

  ///issued page
  let issuedPage = document.getElementById("issued");
  issuedPage.addEventListener("click", onClickIssusePage);
}

///book page
function onClickBookPage() {
  let homePage = document.getElementById("home");
  let bookPage = document.getElementById("books");
  let userPage = document.getElementById("users");
  let issuedPage = document.getElementById("issued");
  bookPage.classList.add("active");
  //-----
  homePage.classList.remove("active");
  userPage.classList.remove("active");
  issuedPage.classList.remove("active");
  //----
  let contentBox = document.getElementById("content-box");
  contentBox.innerHTML = `<div><div>
  <div id="form" class="form">
      <div class="form-style">
          <label for="isbn">ISBN</label>
          <input type="number" id="isbn" name="ISBN" placeholder="Enter ISBN">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="book">Book Name</label>
          <input type="text" id="book" name="Book Name" placeholder="Enter Book Name">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="author">Author</label>
          <input type="text" id="author" name="Author" placeholder="Enter Author Name">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="publisher">Publisher</label>
          <input type="text" id="publisher" name="Publisher" placeholder="Enter Publisher">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="quantity">Quantity</label>
          <input type="number" id="quantity" name="Quantity" placeholder="Enter quantity">
          <small>Error message</small>
      </div>

      <button type="submit" id="bookSubmit" onclick="onClickAddBooks(event)">Add Books</button>
  </div>
</div>

<div>
  <table id="user-list">
      <thead>
          <tr>
              <th>ID</th>
              <th>ISBN</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Quantity</th>
              <th>Issued Book</th>
              <th></th>
              <th></th>
          </tr>
      </thead>

      <tbody></tbody>
    </table>
</div></div>`;

  initBookList();
}

///user page
function onClickUserPage() {
  let homePage = document.getElementById("home");
  let bookPage = document.getElementById("books");
  let userPage = document.getElementById("users");
  let issuedPage = document.getElementById("issued");
  userPage.classList.add("active");
  //-----
  bookPage.classList.remove("active");
  home.classList.remove("active");
  issuedPage.classList.remove("active");
  //----
  let contentBox = document.getElementById("content-box");
  contentBox.innerHTML = `<div><div>
  <div id="form" class="form">
      <div class="form-style">
          <label for="username">Username</label>
          <input type="text" id="username" name="Username" placeholder="Enter User Name">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="email">Email</label>
          <input type="text" id="email" name="Email" placeholder="Enter email">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="address">Address</label>
          <input type="text" id="address" name="Address" placeholder="Enter Address">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="city">City</label>
          <input type="text" id="city" name="City" placeholder="Enter City">
          <small>Error message</small>
      </div>

      <div class="form-style">
          <label for="contact">Contact Number</label>
          <input type="text" id="contact" name="Contact" placeholder="Enter Phone number">
          <small>Error message</small>
      </div>
      <button type="submit" id="userSubmit" onclick="onClickAddUser(event)">Add User</button>
  </div>
</div>

<div>
  <table id="user-list">
      <thead>
          <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Contact No</th>
              <th></th>
              <th></th>
              <th></th>
          </tr>
      </thead>

      <tbody></tbody>
    </table>
</div></div>`;

  initUserList();
}

///issued page
function onClickIssusePage() {
  let homePage = document.getElementById("home");
  let bookPage = document.getElementById("books");
  let userPage = document.getElementById("users");
  let issuedPage = document.getElementById("issued");
  issuedPage.classList.add("active");
  //-----
  bookPage.classList.remove("active");
  userPage.classList.remove("active");
  home.classList.remove("active");
  //----
  let contentBox = document.getElementById("content-box");
  contentBox.innerHTML = `<div><div class="container">
  <div class="row">
      <div class="col-sm-2">
          <select class="dropdown" id="user-dropdown" name="User"></select>
          <small>Error message</small>
      </div>
      <div class="col-sm-3">
          <select class="dropdown" id="book-dropdown" name="Book"></select>
          <small>Error message</small>
      </div>
      <div class="col-sm-3 input-count">
          <input type="text" id="count" name="Count" class="dropdown" placeholder="Enter Books Count">
          <small>Error message</small>
      </div>
      <div class="col-sm">
          <button type="submit" onclick="onIssueUserClick(event)">Add User</button>
      </div>
  </div>
</div>

<div>
  <table id="user-list">
      <thead>
          <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Book</th>
          </tr>
      </thead>
      
      <tbody>
  </tbody>
  </table>
</div></div>`;

  initIssuedPage();
}
