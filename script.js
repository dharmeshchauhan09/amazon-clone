document.getElementById("addToCartBtn").addEventListener("click", function() {
  alert("Product added to the cart!");
});

document.getElementById("searchBtn").addEventListener("click", function() {
  let searchQuery = prompt("Enter search term:");
  if (searchQuery) {
    window.location.href = "index.html?search=" + searchQuery;
  }
});
