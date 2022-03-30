// Variable declaration
const lonEl = document.querySelector('#lon');
const latEl = document.querySelector('#lat');  

function getLocation() {
    // Geolocator
    if ('geolocation' in navigator) {
        console.log('geolocation is available');
        navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const timestamp = position.timestamp;

    //Mapbox Access and Styling
            mapboxgl.accessToken = 'pk.eyJ1IjoidHJleGltYm8iLCJhIjoiY2tudHkzdmZyMDZnbDJ2cXEyajU0NjN3ZiJ9.Bs8HyQFcZ_mukpwxwedSsA';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lon, lat], // starting position [lng, lat]
                zoom: 15 // starting zoom
            });
                
    // PLACING MARKER ON LON LAT WHERE USER IS ACCESSING FROM
            var marker = new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .addTo(map)

    // ADDING SOURCE INFORMATION FOR PLACING POINTS OF BARS

            // mapboxgl.addSource('pointsSource', {
            //     type: 'geojson',
            //     data: {
            //         "type":"Feature",
            //         "properties":{},
            //         "geometry": {
            //             "type":"Point",
            //             "coordinates": [
            //                 40.691411, -73.976351
            //             ]
            //         }
            //     }
            // });
            
    // REFERENCE ABOVE JSON TO POPULATE LOCATION FOR ADDING BAR POINTS

            // function addPoint() {
            //     mapboxgl.addLayer({
            //         id: 'points',
            //         source: 'pointsSource',
            //         type: 'circle'
            //     }).addTo(map)
            // }

            const data = {lon, lat};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json);
        });
        } else {
            console.log('geolocation is unavailable');
        }
}

