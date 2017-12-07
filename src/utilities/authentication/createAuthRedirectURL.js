import { stringify } from 'querystring';

/**
 * @param {string} login_path
 * @param {string} response_type
 * @param {string} client_id
 * @param {string} redirect_uri
 * @param {string} uuid
 */
export default function createAuthRedirectURL(
  login_path,
  response_type,
  client_id,
  redirect_uri,
  uuid,
){
  if(response_type === 'token' && !uuid){
    throw new Error(`'UUID must be set when response_type is 'token'.`)
  }

  const search = { scope: '*', client_id, response_type, redirect_uri };

  if(response_type === 'token' && uuid){
    search.state = uuid
  }

  return `${login_path}?${stringify(search)}`;
}
