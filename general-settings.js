// בודק אם אנחנו נמצאים באחד מהדומיינים הרלוונטיים
if (window.location.hostname.endsWith('nhlocal.github.io') || window.location.hostname.endsWith('ze-kal.top')) {

    // 1. קביעת מזהה המיכל (Container ID) הנכון לפי הדומיין
    let gtmId;
    if (window.location.hostname.endsWith('nhlocal.github.io')) {
        gtmId = 'GTM-KQM6HCT';
    } else if (window.location.hostname.endsWith('ze-kal.top')) {
        gtmId = 'GTM-T5D8XKQX';
    }

    // 2. אם נמצא מזהה מתאים, נמשיך בטעינת הסקריפטים
    if (gtmId) {
        // הגדרת dataLayer (חובה לפני קוד GTM)
        window.dataLayer = window.dataLayer || [];

        // פונקציית המרה גנרית שעובדת עם dataLayer
        function conversion_music_drive() {
          window.dataLayer.push({
            'event': 'Registration',
            'event_category': 'music_drive',
            'value': 1,
            'currency': 'NIS'
          });
        };

        // 3. טעינת Google Tag Manager עם המזהה הדינאמי הנכון
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', gtmId); // <-- כאן אנו משתמשים במשתנה gtmId

        // קוד טעינה של Microsoft Clarity (נשאר ללא שינוי)
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "j4f7w6xhpe");
    }
}