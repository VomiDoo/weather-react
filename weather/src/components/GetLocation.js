export function GetCoords (setFunction) {
    navigator.geolocation.getCurrentPosition((position) => {
        const coords = [
            `${position.coords.latitude.toFixed(
              4
            )},${position.coords.longitude.toFixed(4)}`,
          ].join(',');
        setFunction(coords)
      });
}