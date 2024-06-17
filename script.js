const headerTitle = document.querySelector(".header__title");
const adviceContainer = document.querySelector(".advice");
const adviceRandomizerBtn = document.querySelector(".button");
const adviceRandomizerBtnIcon = document.querySelector(".button > img");

async function fetchRandomAdvice() {
  try {
    adviceRandomizerBtn.setAttribute("disabled", "disabled");
    adviceRandomizerBtnIcon.classList.add("spin");
    const request = await fetch("https://api.adviceslip.com/advice");

    if (!request.ok) {
      throw new Error("Network response was not ok");
    }
    const response = await request.json();
    const { id, advice } = response.slip;
    headerTitle.textContent = `Advice #${id}`;
    adviceContainer.textContent = advice;
  } catch (error) {
    console.error("Failed to fetch advice:", error);
  } finally {
    setTimeout(() => {
      adviceRandomizerBtn.removeAttribute("disabled");
      adviceRandomizerBtnIcon.classList.remove("spin");
    }, 500);
  }
}

fetchRandomAdvice();
