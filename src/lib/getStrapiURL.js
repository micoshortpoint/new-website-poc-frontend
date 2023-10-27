function getStrapiURL() {
    if (import.meta.env.ENVIRONMENT == "dev") return import.meta.env.DEV_STRAPI_URL
    else return import.meta.env.PROD_STRAPI_URL
}
export default getStrapiURL;