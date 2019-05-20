const mainwrap = document.querySelector(".main-wrap");
const openSearch = document.querySelector("#search-icon");
const closeSearch = document.querySelector("#search-close");
const formContainer = document.querySelector("#main-search-form");
const searchContainer = document.querySelector("#search-container")
const searchInput = document.querySelector(".search-input");
const welcomeMessage = document.querySelector("#welcome");



function init()
{
  welcomeMessage.classList.add("show-search");
  initEvents();
}

function open()
{
  mainwrap.classList.add("move");
  formContainer.classList.add("show-search");
  searchContainer.classList.remove("opacity-off");
  searchInput.focus();
}

function close()
{
  mainwrap.classList.remove("move");
  formContainer.classList.remove("show-search");
  searchContainer.classList.add("opacity-off");
}

function initEvents()
{
  openSearch.addEventListener('click', open);
  closeSearch.addEventListener('click', close);
  document.addEventListener('keyup', function(ev) {
			if( ev.keyCode == 27 ) {
				close();
			}
	});
}


init();
