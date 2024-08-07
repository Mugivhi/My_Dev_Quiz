const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
function showPopup() {
    var selectElement = document.getElementById("Dropdown");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    var popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = " " + selectedOption;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}