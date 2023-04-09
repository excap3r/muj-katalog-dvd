export function register() {
  if ('serviceWorker' in navigator) {
    const onsuccess = () => console.log('Service Worker registered successfully.');
    const onfailure = () => console.log('Service Worker registration failed.');

    navigator.serviceWorker
      .register('service-worker.js')
      .then(onsuccess)
      .catch(onfailure);
  }
}
