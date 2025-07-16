const env = __ENV.NODE_ENV || 'staging';

const ENV_MAP:  Record<string, string> = {
  local: 'http://localhost:3000/',
  staging: 'https://reqres.in/',
  production: 'https://reqres.in.prod/',
}
/** 
 * Environment variable for the current environment. 
    * It maps the NODE_ENV to a more readable format.
    * If NODE_ENV is 'development', ENV will be 'dev'.
    * If NODE_ENV is 'staging', ENV will be 'staging'.
    * If NODE_ENV is 'production', ENV will be 'prod'.
    * 
    **/

export const BASE_URL = ENV_MAP[env] || 'staging';