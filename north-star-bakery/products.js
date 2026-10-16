const favorites = [];
const productCategories = ["Breads", "Pastries", "Cakes"];

const saveBreadButton = document.getElementById("save-bread");
const savePastriesButton = document.getElementById("save-pastries");
const saveCakesButton = document.getElementById("save-cakes");
const favoritesList = document.getElementById("favorites-list");

saveBreadButton.addEventListener("click", function() {
    if (favorites.includes(productCategories[0])) {
        favorites.splice(favorites.indexOf(productCategories[0]), 1);
    } else {
        favorites.push(productCategories[0]);
    }
        localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
        displayFavorites();
});

savePastriesButton.addEventListener("click", function() {
    if (favorites.includes(productCategories[1])) {
        favorites.splice(favorites.indexOf(productCategories[1]), 1);
    } else {
        favorites.push(productCategories[1]);
    }
        localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
        displayFavorites();
});

saveCakesButton.addEventListener("click", function() {
    if (favorites.includes(productCategories[2])) {
        favorites.splice(favorites.indexOf(productCategories[2]), 1);
    } else {
        favorites.push(productCategories[2]);
    }
        localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
        displayFavorites();
});

const savedFavorites = JSON.parse(
    localStorage.getItem("bakeryFavorites") || "[]"
);
favorites.push(...savedFavorites);

if (favorites.length > 0) {
    displayFavorites();
}

function displayFavorites() {
    favoritesList.textContent = "Your favorites: " + favorites.join(". ");
    updateFavoriteButtons();
}
function updateFavoriteButtons() {
    saveBreadButton.textContent = favorites.includes("Breads")
        ?"\u2661 Remove Breads from Favorites"
        :"\u2661 Add Breads to Favorites";

    savePastriesButton.textContent = favorites.includes("Pastries")
        ?"\u2661 Remove Pastries from Favorites"
        : "\u2661 Add Pastries to Favorites";

    saveCakesButton.textContent = favorites.includes("Cakes")
        ? "\u2661 Remove Cakes from Favorites"
        : "\u2661 Add Cakes to Favorites";


    
}