// This script applies saved UI settings from localStorage on page load.
// It should be included on every page you want to customise.
;(function () {
  try {
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    const root = document.documentElement;
    // apply CSS custom property overrides
    for (const key in settings) {
      root.style.setProperty(key, settings[key]);
    }
    // apply font size if defined
    if (settings['--font-size']) {
      document.body.style.fontSize = settings['--font-size'];
    }
    // adjust thumbnail height and fit if defined
    if (settings['--thumb-height']) {
      document.querySelectorAll('.thumb').forEach(el => {
        el.style.height = settings['--thumb-height'];
      });
    }
    if (settings['--thumb-fit']) {
      document.querySelectorAll('.thumb img').forEach(img => {
        img.style.objectFit = settings['--thumb-fit'];
      });
    }
  } catch (e) {
    console.warn('Unable to apply site settings:', e);
  }
})();
