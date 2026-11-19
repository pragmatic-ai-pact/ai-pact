(() => {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest?.("[data-copy-target]");
    if (!button) return;

    const target = document.getElementById(button.dataset.copyTarget);
    const status = button.closest(".appendix")?.querySelector(".copy-status");
    if (!target) return;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is unavailable");
      }

      await navigator.clipboard.writeText(target.textContent.trim());
      button.classList.add("is-copied");
      status.textContent = "Copied to clipboard";
    } catch {
      status.textContent = "Copy failed. Select and copy the instructions manually.";
    }
  });
})();
