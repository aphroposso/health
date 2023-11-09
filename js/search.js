function search() {
  var earth = document.getElementById("empower");
  var wind = document.getElementById("assembly");
  var fire = document.getElementById("breastfed");
  var searchItem = document.getElementById("searchInfo").value;
  if (searchItem === "empower") {
    earth.style.display = "block";
  } else if (searchItem === "assembly") {
    wind.style.display = "block";
  } else if (searchItem === "breastfed") {
    fire.style.display = "block";
  } else
    alert("It is not included" + searchItem);
}