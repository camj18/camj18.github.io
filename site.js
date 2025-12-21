(function(){
  // Generic video speed control handler.
  // To use: wrap a project video section in an element with data-video-controls
  // and include buttons with data-speed plus a readout with data-speed-readout.
  document.querySelectorAll("[data-video-controls]").forEach(root => {
    const video = root.querySelector("video");
    const readout = root.querySelector("[data-speed-readout]");
    const buttons = root.querySelectorAll("button[data-speed]");
    if (!video || !buttons.length) return;

    function setSpeed(rate){
      video.playbackRate = rate;
      if (readout) readout.textContent = `Speed: ${rate}×`;
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const rate = parseFloat(btn.getAttribute("data-speed"));
        if (!Number.isFinite(rate)) return;
        setSpeed(rate);
      });
    });

    setSpeed(1);
  });
})();
