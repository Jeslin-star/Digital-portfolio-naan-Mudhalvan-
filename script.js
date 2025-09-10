function toggleMenu() {

  document.getElementById("menuDropdown").classList.toggle("show");

}

function openModal(id) {

  document.getElementById(id).style.display = "block";

  document.getElementById("menuDropdown").classList.remove("show");

}

function closeModal(id) {

  document.getElementById(id).style.display = "none";

}

window.onclick = function(event) {

  // Close dropdown

  if (!event.target.matches('.menu button')) {

    let dropdowns = document.getElementsByClassName("menu-content");

    for (let i = 0; i < dropdowns.length; i++) {

      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {

        openDropdown.classList.remove('show');

      }

    }

  }

  // Close modal

  let modals = document.getElementsByClassName("modal");

  for (let i = 0; i < modals.length; i++) {

    if (event.target == modals[i]) {

      modals[i].style.display = "none";

    }

  }

}