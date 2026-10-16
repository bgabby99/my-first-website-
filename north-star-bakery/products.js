const favorites = [];

const saveBreadButton = document.getElementById("save-bread");
const favoritesList = document.getElementById("favorites-list");

saveBreadButton.addEventListener("click", function() {
    if (!favorites.includes("Breads")) {
        favorites.push("Breads");
        localStorage.setItem("bakeryFavorites", JSON.stringify(favorites));
    }
    favoritesList.textContent = "Your favorites: " + favorites.join(",");
});

const savedFavorites = JSON.parse(
    localStorage.getItem("bakeryFavorites") || "[]"
);
favorites.push(...savedFavorites);

if (favorites.length > 0) {
    favoritesList.textContent = 
         "Your favorites: " + favorites.join(",");
}