const charts = {
  sex: [
    { label: "Female", value: 74.2 },
    { label: "Male", value: 18.89 }
  ],
  class: [
    { label: "1st Class", value: 62.96 },
    { label: "2nd Class", value: 47.28 },
    { label: "3rd Class", value: 24.24 }
  ],
  age: [
    { label: "Child", value: 57.97 },
    { label: "Teen", value: 42.86 },
    { label: "Young Adult", value: 35.8 },
    { label: "Adult", value: 38.43 },
    { label: "Senior", value: 22.73 }
  ],
  fare: [
    { label: "Low Fare", value: 19.73 },
    { label: "Medium Fare", value: 30.36 },
    { label: "High Fare", value: 45.5 },
    { label: "Very High Fare", value: 58.11 }
  ]
};

function formatPercent(value) {
  return `${value.toFixed(2).replace(/\.00$/, "")}%`;
}

function renderVerticalChart(container, data) {
  const max = 100;

  container.innerHTML = data.map(item => {
    const height = Math.max((item.value / max) * 100, 3);
    return `
      <div class="bar-item">
        <div class="bar-plot">
          <div class="bar-fill" style="--bar-height: ${height}%;">
            ${formatPercent(item.value)}
          </div>
        </div>
        <div class="bar-label">${item.label}</div>
      </div>
    `;
  }).join("");
}

function renderHorizontalChart(container, data) {
  const max = 100;

  container.innerHTML = data.map(item => {
    const width = Math.max((item.value / max) * 100, 4);
    return `
      <div class="bar-item">
        <div class="bar-label">${item.label}</div>
        <div class="bar-fill" style="--bar-width: ${width}%;"></div>
        <div class="bar-value">${formatPercent(item.value)}</div>
      </div>
    `;
  }).join("");
}

document.querySelectorAll("[data-chart]").forEach(container => {
  const chartName = container.dataset.chart;
  const data = charts[chartName];

  if (!data) return;

  if (container.classList.contains("horizontal")) {
    renderHorizontalChart(container, data);
  } else {
    renderVerticalChart(container, data);
  }
});

const revealTargets = [
  ...document.querySelectorAll(".section-heading, .section-grid, .history-card, .metric-card, .chart-panel, .timeline article, .findings-text, .insight-list article, .gallery-grid figure, .demo > div")
];

revealTargets.forEach((target, index) => {
  target.classList.add("reveal");
  target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("is-visible");

    if (entry.target.classList.contains("chart-panel")) {
      entry.target.querySelectorAll(".bar-fill").forEach(bar => {
        bar.classList.add("is-filled");
      });
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.18 });

revealTargets.forEach(target => observer.observe(target));

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const header = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.background = "rgba(7, 21, 33, 0.92)";
  } else {
    header.style.background = "rgba(9, 27, 43, 0.76)";
  }
});
