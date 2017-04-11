import { watchWeather } from './weather';
import { watchForecast } from './forecast';

export default function* sagas() {
    yield [
        watchWeather(),
        // watchForecast(),
    ];
}
