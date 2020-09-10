var addToBag = document.querySelector(".add-to-bag");

addToBag.addEventListener("click", function (e) {
  var selectedSize = document.querySelector('input[name="sizes"]:checked')
    .value;
  alert("Selected Size: " + selectedSize);
});
