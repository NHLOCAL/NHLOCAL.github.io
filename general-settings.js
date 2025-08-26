if (window.location.hostname.endsWith('nhlocal.github.io') || window.location.hostname.endsWith('ze-kal.top')) {

    // הגדרת dataLayer (חובה לפני קוד GTM)
    window.dataLayer = window.dataLayer || [];

    // רישום אירוע המרה באמצעות dataLayer (השיטה הנכונה לעבודה עם GTM)
    function conversion_music_drive() {
      window.dataLayer.push({
        'event': 'Registration', // שם אירוע גנרי
        'event_category': 'music_drive',
        'value': 1,
        'currency': 'NIS'
      });
    };

    // --- קוד טעינה של Google Tag Manager (GTM) בלבד ---
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KQM6HCT');


    // --- קוד טעינה של Microsoft Clarity (נשאר ללא שינוי) ---
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j4f7w6xhpe");
}