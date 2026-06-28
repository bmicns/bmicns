// 방문자 추적 — admin 페이지 제외, 세션당 1회만 카운트
(function () {
  var SB_URL = 'https://howpefpsyzxchqqtcsct.supabase.co';
  var SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd3BlZnBzeXp4Y2hxcXRjc2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzODk3OTUsImV4cCI6MjA5MTk2NTc5NX0.5lpG2FroeuWVJHKqp6wgAr0IriRWBcr09ZR0OaXRg-0';

  if (location.pathname.indexOf('admin') !== -1) return;
  var today = new Date().toISOString().split('T')[0];
  if (sessionStorage.getItem('bmicns_v_' + today)) return;
  sessionStorage.setItem('bmicns_v_' + today, '1');

  fetch(SB_URL + '/rest/v1/rpc/increment_visit', {
    method: 'POST',
    headers: {
      'apikey': SB_KEY,
      'Authorization': 'Bearer ' + SB_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ visit_date: today })
  });
})();
