
let countryNameList = ["Afghanistan", "Algeria", "Argentina", "Austria", "Bahrain", "Bangladesh",
    "Belgium", "Bolivia", "Brazil", "Cabo-Verde", "Cambodia", "Cameroon", "Canada",
    "China", "congo", "Denmark", "Dominica", "India", "Norway", "Pakistan"];

let filteredListItem = [];
let tagList = [];


function onInputChange(e) {
    let input = document.getElementById("text-box").value.toLowerCase();
    let dropdown = document.getElementById("dropdown");

    if (input == "") {
        dropdown.innerHTML = "";
        return;
    }

    filteredListItem = countryNameList.filter((countryName, index) => {
        return countryName.toLowerCase().includes(input);
    });

    renderListTags();
}

function renderListTags() {
    let listItem = filteredListItem.map((item) => `<li class="country-list" data-country-name="${item}" onClick="onclickTag(event)">
                                                        <img src="country_and_flags/${item}.png" id="country-flag">
                                                        <span class="country-name">${item}</span>
                                                    </li>`).join(" ");
    dropdown.innerHTML = `<ul class="dropdown_menu-6">${listItem}</ul>`;
}

function onclickTag(e) {
    let input = document.getElementById("text-box");
    input.value = "";
    let target = e.currentTarget.getAttribute("data-country-name");
    tagList.push(target);
    countryNameList = countryNameList.filter((countryName) => countryName != target);

    onInputChange();
    console.log(countryNameList);
    renderTags();
}

function renderTags() {
    let tagItems = document.getElementById("tag-items");

    tagItems.innerHTML = tagList.map((item) => {
        return `<span id="tag" class="col-sm tag alignleft">
                                    <img src="country_and_flags/${item}.png" id="flag_img">
                                    <p>${item}</p>
                                    <i class="fa fa-times" id="trace" aria-hidden="true" onClick=onDeleteClick(event) data-delete-name="${item}"></i>
                             </span>`}).join(" ");
    console.log(tagList);
}

function onDeleteClick(e) {
    let target = e.currentTarget.getAttribute("data-delete-name");
    tagList = tagList.filter((item) => item != target);
    renderTags();

    countryNameList.unshift(target);
    onInputChange();
}