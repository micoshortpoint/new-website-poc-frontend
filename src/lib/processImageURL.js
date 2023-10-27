import getStrapiURL from "./getStrapiURL";

function processImageURL(url) {
    if (!url) return "";
    if (import.meta.env.ENVIRONMENT == "prod") return url;
    else return getStrapiURL() + url;
}

export default processImageURL;