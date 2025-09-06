if (window.location.hostname.endsWith('nhlocal.github.io') || window.location.hostname.endsWith('ze-kal.top')) {
    
    // רישום אירוע עבור ניתוח גוגל
    function conversion_music_drive() {
      gtag('event', 'Registration', {
        'event_category': 'music_drive',
        'value': 1,
        'currency': 'NIS'
      });
    };

    // ================= מעקב גוגל (gtag.js) =================
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // בחירת Measurement ID לפי דומיין
    let GA_ID = null;
    if (window.location.hostname.endsWith('nhlocal.github.io')) {
        GA_ID = 'G-TGD4VQW4X8'; // NHLOCAL
    } else if (window.location.hostname.endsWith('ze-kal.top')) {
        GA_ID = 'G-SPX587LJWB'; // ZE-KAL
    }

    if (GA_ID) {
        gtag('config', GA_ID);

        (function() {
            var ga = document.createElement('script'); 
            ga.type = 'text/javascript'; 
            ga.async = true;
            ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();
    }
    // =========================================================

    // Clarity Snippet - פעיל
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j4f7w6xhpe");
	
	
    /* === GTM Snippet - מוער (לא פעיל) ===
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KQM6HCT');
    */	
	
}
