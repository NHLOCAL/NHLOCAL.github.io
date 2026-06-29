(function () {
  var host = window.location.hostname.replace(/^www\./, '');

  var measurementByHost = {
    'nhlocal.github.io': 'G-TGD4VQW4X8',
    'ze-kal.top': 'G-TGD4VQW4X8'
  };

  var measurementId = measurementByHost[host];

  if (!measurementId) {
    return;
  }

  window.__nhlocalGeneralSettings = window.__nhlocalGeneralSettings || {
    configuredMeasurementIds: {},
    loadedScripts: {}
  };

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  if (!window.__nhlocalGeneralSettings.loadedScripts[measurementId]) {
    var existingScript = document.querySelector(
      'script[src="https://www.googletagmanager.com/gtag/js?id=' + measurementId + '"]'
    );

    if (!existingScript) {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;

      var firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(ga, firstScript);
    }

    window.__nhlocalGeneralSettings.loadedScripts[measurementId] = true;
  }

  if (!window.__nhlocalGeneralSettings.configuredMeasurementIds[measurementId]) {
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    window.__nhlocalGeneralSettings.configuredMeasurementIds[measurementId] = true;
  }

  window.conversion_music_drive = function () {
    window.gtag('event', 'Registration', {
      event_category: 'music_drive',
      value: 1,
      currency: 'NIS'
    });
  };

  if (!window.__nhlocalGeneralSettings.clarityLoaded) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'j4f7w6xhpe');

    window.__nhlocalGeneralSettings.clarityLoaded = true;
  }
})();