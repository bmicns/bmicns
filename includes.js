// 접속자 통계 (localStorage 기반)
(function () {
  // admin 페이지는 카운트 제외
  if (location.pathname.indexOf('admin') !== -1) return;
  var today = new Date().toISOString().split('T')[0];
  var visited = sessionStorage.getItem('bmicns_visited_' + today);
  if (!visited) {
    var visits = JSON.parse(localStorage.getItem('bmicns_visits') || '{}');
    visits[today] = (visits[today] || 0) + 1;
    localStorage.setItem('bmicns_visits', JSON.stringify(visits));
    sessionStorage.setItem('bmicns_visited_' + today, '1');
  }
})();

// 공통 영역(nav, footer) 로드 및 active 메뉴 처리
(function () {
  var navEl = document.getElementById('nav-placeholder');
  var footerEl = document.getElementById('footer-placeholder');

  function load(url, target, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        target.outerHTML = xhr.responseText;
        if (callback) callback();
      }
    };
    xhr.send();
  }

  // 현재 페이지 파일명 (.html 유무 모두 대응)
  var page = location.pathname.split('/').pop() || 'index.html';

  if (navEl) {
    load('nav.html', navEl, function () {
      // active 메뉴 표시
      var links = document.querySelectorAll('.nav-links a');
      links.forEach(function (a) {
        var href = a.getAttribute('href').replace('.html', '');
        var current = page.replace('.html', '');
        if (href === current) {
          a.style.color = 'var(--color-text-primary)';
          a.style.fontWeight = '700';
        }
      });
      // 모바일 햄버거 메뉴 토글
      var toggle = document.querySelector('.nav-toggle');
      if (toggle) {
        toggle.addEventListener('click', function () {
          var navLower = document.querySelector('.nav-lower');
          var navLinks = document.querySelector('.nav-links');
          if (navLower) {
            var isHidden = navLower.style.display === 'block';
            navLower.style.display = isHidden ? '' : 'block';
            navLinks.classList.toggle('open');
          }
        });
      }
    });
  }

  if (footerEl) {
    load('footer.html', footerEl);
  }
})();
