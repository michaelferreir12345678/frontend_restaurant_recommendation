// src/services/placesService.js
export const loadGoogleMapsScript = (callback) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_API&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => callback();
    document.head.appendChild(script);
  };