const ApiUrl = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL;
const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;
const unit = process.env.NEXT_PUBLIC_OPEN_WEATHER_UNIT;

const UrlParamsReplace = (url, params = {}) => {
    let urlWithPrefix = `${ApiUrl}${url}`;
    if (params) {
        Object.keys(params).forEach((key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key])));
    }
    const urlWithApiKey = `${urlWithPrefix}&appid=${apiKey}&unit=${unit}`;
    return urlWithApiKey;
};

export const GET_CURRENT_WEATHER = ({ lat, long }) => UrlParamsReplace(`/weather?lat=:lat&lon=:long&units=metric`, { lat, long });
export const GET_HOURLY_WEATHER = ({ lat, long, days }) => UrlParamsReplace(`/forecast?lat=:lat&lon=:long&units=metric`, { lat, long, days });