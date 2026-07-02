const chapter = document.getElementById("chapter");
const title = document.getElementById("title");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const stars = document.getElementById("stars");
const secretStar = document.getElementById("secretStar");

let current = 0;

// ---------- CREATE STARS ----------

function createStars() {

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 5 + "s";

        stars.appendChild(star);
    }

}

createStars();

// ---------- SHOW STORY ----------

function showStory(index) {

    const scene = story[index];

    if (!scene) return;

    chapter.textContent = scene.chapter;
    title.textContent = scene.title;
    text.textContent = scene.text;

    document.getElementById("storyCard").classList.remove("fade");

    void document.getElementById("storyCard").offsetWidth;

    document.getElementById("storyCard").classList.add("fade");

    nextBtn.textContent = scene.button;

}

// ---------- BUTTON ----------

nextBtn.addEventListener("click", () => {

    current++;

    if (current >= story.length) {

        nextBtn.innerHTML = "More Soon ❤️";
        current = story.length - 1;
        return;

    }

    showStory(current);

});

// ---------- EASTER EGG ----------

secretStar.addEventListener("click", () => {

    alert("✨ You found a hidden star.");

});

// ---------- START ----------

showStory(0);
