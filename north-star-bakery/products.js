const favorites = [];

const saveBreadButton = document.getElementById("save-bread");
const savePastriesButton = document.getElementById("save-pastries");
const saveCakesButton = document.getElementById("save-cakes");
const favoritesList = document.getElementById("favorites-list");

saveBreadButton.addEventListener("click", function() {
    if (favorites.includes("Breads")) {
        favorites.splice(favorites.indexOf("Breads"), 1);
    } else {
        favorites.push("Breads");
    }
        localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
        displayFavorites();
});

savePastriesButton.addEventListener("click", function() {
    if (favorites.includes("Pastries")) {
        favorites.splice(favorites.indexOf("Pastries"), 1);
    } else {
        favorites.push("Pastries");
    }
        localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
        displayFavorites();
});

saveCakesButton.addEventListener("click", function() {
    if (favorites.includes("Cakes")) {
        favorites.splice(favorites.indexOf("Cakes"), 1);
    } else {
        favorites.push("Cakes");
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