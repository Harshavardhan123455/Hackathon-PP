// --> Anchor Links

let HomeLink = document.getElementById("Home");
let menuList = document.getElementById("MenuSection");
let payments = document.getElementById("DeliverySection");

// --> Spinner 

let loadingSpin = document.getElementById("spinner");

// --> All sections

let sectionHome = document.getElementById("SectionHome");
let SectionAcess = document.getElementById("SectionMenu");
let whyChoosenUsPage = document.getElementById("SectionWcu");
let paymentPage = document.getElementById("SectionPayment");
let AboutFood = document.getElementById("FoodReview");
let giftPage = document.getElementById("offerPage");
let followPage = document.getElementById("Followus");
let contactpage = document.getElementById("ContactPage");
let UpdatedContainer = document.getElementById("UpdatedContainer");

// ->Button 

let buttomViewMore = document.getElementById("ViewMore");


// -->About food and why whyChoosenUsPage click function

function setTimeForLoader() {
    loadingSpin.classList.remove("d-none");
    let setTime = setTimeout(function() {
        loadingSpin.classList.add("d-none");
        whyChoosenUsPage.classList.remove("d-none");
        AboutFood.classList.remove("d-none");
    }, 2000);
}

buttomViewMore.onclick = function() {
    SectionAcess.classList.add("d-none");
    paymentPage.classList.add("d-none");
    sectionHome.classList.add("d-none");
    giftPage.classList.add("d-none");
    UpdatedContainer.classList.add("d-none");
    setTimeForLoader();
}

// --> Menu List Click Function

function menuFunctionLoader() {
    loadingSpin.classList.remove("d-none");
    let setTime = setTimeout(function() {
        loadingSpin.classList.add("d-none");
        SectionAcess.classList.remove("d-none");
    }, 3000);
}

function MenuFunction() {
    sectionHome.classList.add("d-none");
    whyChoosenUsPage.classList.add("d-none");
    AboutFood.classList.add("d-none");
    paymentPage.classList.add("d-none");
    giftPage.classList.add("d-none");
    UpdatedContainer.classList.add("d-none");
    menuFunctionLoader();
}

// -->payment and gift Click Function

function paymentLoader() {
    loadingSpin.classList.remove("d-none");
    let setTime = setTimeout(function() {
        loadingSpin.classList.add("d-none");
        paymentPage.classList.remove("d-none");
        giftPage.classList.remove("d-none");
    }, 2000);
}


function Payment() {
    SectionAcess.classList.add("d-none");
    sectionHome.classList.add("d-none");
    whyChoosenUsPage.classList.add("d-none");
    AboutFood.classList.add("d-none");
    UpdatedContainer.classList.add("d-none");
    paymentLoader();
}

// -->Home Page Click Function

function HomePageLoader() {
    loadingSpin.classList.remove("d-none");
    let setTime = setTimeout(function() {
        loadingSpin.classList.add("d-none");
        sectionHome.classList.remove("d-none");
    }, 1000);
}

function HomePage() {
    SectionAcess.classList.add("d-none");
    paymentPage.classList.add("d-none");
    whyChoosenUsPage.classList.add("d-none");
    AboutFood.classList.add("d-none");
    giftPage.classList.add("d-none");
    UpdatedContainer.classList.add("d-none");
    HomePageLoader();
}

menuList.addEventListener("click", MenuFunction);
payments.addEventListener("click", Payment);
HomeLink.addEventListener("click", HomePage);


// Register->Referral/Input

let refer = document.getElementById("Refferal");
let referalInput = document.getElementById("referalInput");

refer.onclick = function() {
    refer.textContent = "";
    referalInput.classList.remove("d-none");
}

// Api search bar 

let apiInputElement = document.getElementById("apiInput");
let ApiInput = document.getElementById("Apis");


function EveryKey(result) {
    let title = result.title;
    let image = result.imageLink;
    let author = result.author;

    let divElementOne = document.createElement("div");
    divElementOne.classList.add("col-12", "col-md-6", "col-lg-3");
    ApiInput.appendChild(divElementOne);

    let divElementTwo = document.createElement("div");
    divElementTwo.classList.add("shadow", "Non-veg-list", "p-3", "mb-3", "mt-4");
    divElementOne.appendChild(divElementTwo);

    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    imageElement.classList.add("non-veg-image", "w-100", "mb-2");
    divElementTwo.appendChild(imageElement);

    let headElement = document.createElement("h1");
    headElement.textContent = author;
    headElement.classList.add("starters");
    divElementTwo.appendChild(headElement);
}

function displayData(searchResults) {
    loadingSpin.classList.add("d-none");
    for (let result of searchResults) {
        EveryKey(result);
    }
}


function ApiItems(event) {
    if (event.key === "Enter") {
        sectionHome.classList.add("d-none");
        loadingSpin.classList.remove("d-none");
        let option = {
            method: "GET"
        };
        let inputValue1 = apiInputElement.value;
        let url = "https://apis.ccbp.in/book-store?search=" + inputValue1;
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                UpdatedContainer.classList.remove("d-none");
                displayData(search_results);
            });

    }
}
apiInputElement.addEventListener("keydown", ApiItems);

// ---> Data Store from register using Local Storage??