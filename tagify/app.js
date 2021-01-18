
let countryNameList = ["Afghanistan", "Algeria", "Argentina", "Austria", "Bahrain", "Bangladesh",
    "Belgium", "Bolivia", "Brazil", "Cabo-Verde", "Cambodia", "Cameroon", "Canada",
    "China", "congo", "Denmark", "Dominica", "India", "Norway", "Pakistan"];

let tagList = [];

function onInputChange(e) {
    let input = document.getElementById("text-box").value.toLowerCase();
    let dropdown = document.getElementById("dropdown");
    if (input == "") {
        dropdown.innerHTML = "";
        return;
    }

    let filteredListItem = countryNameList.filter((countryName) => {
        return countryName.toLowerCase().includes(input);
    });
    renderListTags(filteredListItem);
}

function renderListTags(filteredListItem) {
    let dropdown = document.getElementById("dropdown");
    let listItem = filteredListItem.map((item) => `<li class="country-list" data-country-name="${item}" onClick="onSelectCountry(event)">
                                                        <img src="country_and_flags/${item}.png" id="country-flag">
                                                        <span class="country-name">${item}</span>
                                                    </li>`).join(" ");
    dropdown.innerHTML = `<ul class="dropdown_menu-6">${listItem}</ul>`;
}

function onSelectCountry(e) {
    let selectedCountryName = e.currentTarget.getAttribute("data-country-name");
    tagList.push(selectedCountryName);
    renderTags();

    let input = document.getElementById("text-box");
    input.value = "";
    countryNameList = countryNameList.filter((countryName) => countryName != selectedCountryName);
    onInputChange();
}

function renderTags() {
    let tagItems = document.getElementById("tag-items");
    tagItems.innerHTML = tagList.map((item) => {
        return `<span id="tag" class="col-sm tag alignleft">
                                    <img src="country_and_flags/${item}.png" id="flag_img">
                                    <p>${item}</p>
                                    <i class="fa fa-times" id="trace" aria-hidden="true" onClick=onRemoveCountry(event) data-country-name="${item}"></i>
                             </span>`}).join(" ");
    console.log(tagList);
}

function onRemoveCountry(e) {
    let selectedCountryName = e.currentTarget.getAttribute("data-country-name");
    tagList = tagList.filter((item) => item != selectedCountryName);
    renderTags();

    countryNameList.unshift(selectedCountryName);
    onInputChange();
}