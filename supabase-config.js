var SUPABASE_URL = 'https://howpefpsyzxchqqtcsct.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd3BlZnBzeXp4Y2hxcXRjc2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzODk3OTUsImV4cCI6MjA5MTk2NTc5NX0.5lpG2FroeuWVJHKqp6wgAr0IriRWBcr09ZR0OaXRg-0';

function sbPost(table, data) {
  return fetch(SUPABASE_URL + '/rest/v1/' + table, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });
}

function sbSelect(table, query) {
  return fetch(SUPABASE_URL + '/rest/v1/' + table + '?' + (query || ''), {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY
    }
  }).then(function(r) { return r.json(); });
}
