// רישום אירוע עבור ניתוח גוגל
function conversion_music_drive() {
  // Send the event to Google Analytics
  gtag('event', 'Registration', {
    'event_category': 'music_drive',
	'value': 1, // NIS 1
	'currency': 'NIS' // Currency type
  });
};