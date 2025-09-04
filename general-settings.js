if (window.location.hostname.endsWith('nhlocal.github.io') || window.location.hostname.endsWith('ze-kal.top')) {

    // ================= מניעת רישום כפול =================
    // בדיקה האם קוד המעקב כבר הופעל. אם כן, יוצאים מהפונקציה.
    if (window.isTrackingInitialized) {
        return; 
    }
    // אם לא, מסמנים שהקוד מופעל כעת כדי למנוע ריצה נוספת.
    window.isTrackingInitialized = true;
    // ====================================================

    // רישום אירוע עבור ניתוח גוגל
    function conversion_music_drive() {
      gtag('event', 'Registration', {
        'event_category': 'music_drive',
        'value': 1,
        'currency': 'NIS'
      });
    };

    // ================= מעקב גוגל (gtag.js) - גרסה מלאה ותקינה =================
    // 1. הגדרת התור (dataLayer) והפונקציה (gtag)
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TGD4VQW4X8');

    // 2. טעינת ספריית המעקב של גוגל באופן דינמי
    (function() {
        var ga = document.createElement('script'); 
        ga.type = 'text/javascript'; 
        ga.async = true;
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-TGD4VQW4X8';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    // ===========================================================================


    /* === GTM Snippet - מוער (לא פעיל) ===
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KQM6HCT');
    */


    // Clarity Snippet - פעיל
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j4f7w6xhpe");
}