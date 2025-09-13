```javascript
document.addEventListener('DOMContentLoaded', () => {
  const messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.textContent = 'Capacitor web app initialized successfully!';
  }
  console.log('Capacitor web app initialized.');

  // This part assumes capacitor.js has been generated and loaded by Capacitor
  // and the Capacitor global object is available.
  // For development in a browser, this might be undefined.
  if (window.Capacitor) {
    console.log('Capacitor platform:', Capacitor.getPlatform());
    messageElement.textContent += ` Running on: ${Capacitor.getPlatform()}`;
  } else {
    messageElement.textContent += ' (Running in browser)';
  }
});
```