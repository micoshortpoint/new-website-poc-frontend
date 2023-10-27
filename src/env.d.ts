/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly DEV_STRAPI_URL: string;
  readonly PROD_STRAPI_URL: string;
  readonly ENVIRONMENT: string;
}