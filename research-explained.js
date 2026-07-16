const visual = document.querySelector("#model-visual");
const caption = document.querySelector("#visual-caption");
const stageIndicator = document.querySelector("#visual-stage");
const steps = document.querySelectorAll(".explainer-step");

const captions = [
  "A GCM provides the large-scale state; an embedded CRM supplies detail that the grid cannot resolve.",
  "The CRM is a high-fidelity teacher, but embedding many CRMs makes the global simulation expensive.",
  "The ML emulator learns the CRM response and can stand in for its costly inner loop.",
  "Transferability asks whether the learned emulator can travel between different GCMs and climates.",
];

function setStage(stage) {
  if (!visual) return;

  visual.dataset.stage = stage;
  caption.textContent = captions[stage];
  stageIndicator.textContent = `0${stage + 1} / 04`;

  steps.forEach((step) => {
    step.classList.toggle("is-active", Number(step.dataset.stage) === stage);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setStage(Number(entry.target.dataset.stage));
    });
  },
  { rootMargin: "-38% 0px -38%", threshold: 0 }
);

steps.forEach((step) => observer.observe(step));
