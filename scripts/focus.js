export default function Focus() {
  let buttonsSounds = document.querySelector(".sounds");
  let btns = buttonsSounds.querySelectorAll(".btn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("focus");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" focus", "");
      }
      this.className += " focus";
    });
  }

  function removeFocus() {
    let focusIn = document.querySelector(".focus");
    focusIn.classList.remove("focus");
    console.log(focusIn);
  }

  return {
    removeFocus,
    removeFocus,
  }
}
