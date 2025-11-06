(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const indicator = document.getElementById("indicator");
  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));

  if (index === -1) {
    index = 0;
    slides[0]?.classList.add("is-active");
  }

  const total = slides.length;

  const update = () => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("is-active", idx === index);
      slide.setAttribute("aria-hidden", idx === index ? "false" : "true");
    });

    if (indicator) {
      indicator.textContent = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    }

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;
  };

  const next = () => {
    if (index < total - 1) {
      index += 1;
      update();
    }
  };

  const prev = () => {
    if (index > 0) {
      index -= 1;
      update();
    }
  };

  nextBtn?.addEventListener("click", next);
  prevBtn?.addEventListener("click", prev);

  document.addEventListener("keydown", (event) => {
    const { key } = event;
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(key)) {
      event.preventDefault();
      next();
    } else if (["ArrowLeft", "PageUp"].includes(key)) {
      event.preventDefault();
      prev();
    } else if (key === "Home") {
      event.preventDefault();
      index = 0;
      update();
    } else if (key === "End") {
      event.preventDefault();
      index = total - 1;
      update();
    }
  });

  window.addEventListener("hashchange", () => {
    const hashIndex = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
    if (hashIndex >= 0) {
      index = hashIndex;
      update();
    }
  });

  if (window.location.hash) {
    const hashIndex = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
    if (hashIndex >= 0) index = hashIndex;
  }

  update();
})();
