export function getLoadOptions() {
  return {
    vus: Number(__ENV.VUS) || 1,
    duration: __ENV.DURATION || '1s',
    thresholds: {
      http_req_duration: ['p(95)<500'],
    },
  };
}