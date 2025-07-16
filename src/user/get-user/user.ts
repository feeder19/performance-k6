import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../../config';
import { getLoadOptions } from '../../config/load-options';
/**
 * This script performs a GET request to the user endpoint
 * and checks the response status, response time, and content type.
 */
export const options = getLoadOptions();
  
export default function () {
  const url = `${BASE_URL}/api/users/2`;
  const res = http.get(url);
  check(res, {
    'is status 200': (r) => r.status == 200,
    'is response time < 200ms': (r) => r.timings.duration < 200,
    'has content-type application/json': (r) => r.headers['Content-Type'] === 'application/json',
  });

}
