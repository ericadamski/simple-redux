import { watchWeather } from './weather';

export default function* sagas() {
    yield [ watchWeather() ];
}
