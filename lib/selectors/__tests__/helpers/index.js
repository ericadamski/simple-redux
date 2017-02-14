import { fromJS } from 'immutable';

export function* getTestWeatherObject() {
    while(1) {
        yield (fromJS({
            "coord": {
                "lon": -75.7,
                "lat": 45.41,
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": -14.57,
                "pressure": 1006.15,
                "humidity": 65,
                "temp_min": -14.57,
                "temp_max": -14.57,
                "sea_level": 1028.53,
                "grnd_level": 1006.15
            },
            "wind": {
                "speed": 1.51,
                "deg": 12.5014
            },
            "clouds": { "all": 48 },
            "dt":1486647626,
            "sys": {
                "message": 0.0141,
                "country": "CA",
                "sunrise": 1486642322,
                "sunset": 1486678958
            },
            "id": 6094817,
            "name": "Ottawa",
            "cod":200
        }));
    }
}
