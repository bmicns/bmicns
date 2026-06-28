/* SUPABASE_URL, SUPABASE_KEY — supabase-config.js 에서 로드 */
var CMS_PLATFORM_CATEGORY = '플랫폼개발';
var CMS_PORTFOLIO_CATEGORY = '주요실적';
var NEWS_ONLY_CATEGORIES = ['회사소식', '수주', '파트너십', '공지', '기술'];
var DEFAULT_PLATFORM_ITEMS = [
  {
    title: 'VESTRA',
    slug: 'vestra',
    subtitle: 'AI 전세사기 예방 플랫폼',
    headline: '계약 전 사기 탐지,\n계약 후 등기 이상 알림까지',
    description: '계약 전엔 AI가 등기부·권리관계를 분석해 전세사기 위험 징후를 미리 잡아냅니다.\n계약 후엔 등기부등본에 이상 변동이 생기면 계약자에게 즉시 알림을 보냅니다.\n전세 계약의 처음부터 끝까지 AI가 지켜드립니다.',
    features: [
      '부동산 거래위험도 산출 장치 및 방법 특허출원 (10-2026-0085160)',
      '전세사기 위험 징후 자동 탐지',
      '깡통전세 위험도 산출 (시세 대비 보증금 비율)',
      '등기부 권리관계 AI 분석 (근저당·가압류·선순위 채권)',
      '주소 입력만으로 즉시 분석 결과 확인',
      '분석 리포트 출력 및 이력 관리'
    ],
    demoUrl: 'https://vestra-plum.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    imageAlt: 'VESTRA AI 부동산 권리분석 플랫폼',
    theme: 'default',
    sortOrder: 10
  },
  {
    title: 'CLIO',
    slug: 'clio',
    subtitle: 'AI 문서관리 시스템',
    headline: 'AI로 문서를 생성하고\n결재까지 자동화',
    description: 'RAG 기반 벡터 검색으로 사내 문서를 빠르게 찾고, AI가 회의록·보고서·계약서를 자동 생성합니다. DOCX·HWPX·PDF·XLSX·PPTX 5종 포맷을 지원합니다.',
    features: [
      'AI 문서 생성 (DOCX/HWPX/PDF/XLSX/PPTX 5종)',
      'RAG 벡터 검색',
      '음성→회의록 자동화 (STT)',
      '계약서 AI 리스크 분석'
    ],
    demoUrl: 'https://clioai.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    imageAlt: 'CLIO AI 문서관리 시스템',
    theme: 'light',
    sortOrder: 20
  },
  {
    title: 'NurseScheduler',
    slug: 'nurse',
    subtitle: '3교대 자동편성 시스템',
    headline: '3교대 근무표를 AI가\n자동으로 편성합니다',
    description: '수작업으로 작성하던 교대 근무 스케줄을 AI가 자동 편성합니다.\n교대 변경 요청부터 승인까지 워크플로우로 처리하고, PWA 푸시 알림으로 즉시 통보합니다.',
    features: [
      '월간 캘린더 (오전/오후/야간 색상 코딩)',
      'AI 자동편성 알고리즘',
      '교대 변경 요청/승인 워크플로우',
      'PWA 푸시 알림',
      '관리자 대시보드 & 인력 현황',
      '모바일 최적화'
    ],
    demoUrl: 'https://nurse-sch.vercel.app',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    imageAlt: 'NurseScheduler 3교대 자동편성 시스템',
    theme: 'default',
    sortOrder: 30
  }
];
var DEFAULT_PORTFOLIO_ITEMS = [
  { year: '2026', client: 'BMI C&S', title: '부동산 거래위험도 산출 장치 및 방법 특허출원', sector: '민간', status: '', detail: '부동산 거래위험도 산출 장치 및 방법에 대한 특허출원 (출원번호: 10-2026-0085160)', sortOrder: 10 },
  { year: '2026', client: 'B2C 고객', title: '고객 요구 AI 개발', sector: 'B2C', status: '진행중', detail: '사업 협력 및 개발 진행 (전세사기 방지, 자산관리, 안전관리)', sortOrder: 20 },
  { year: '2026', client: '일반 대학', title: '대학 정보보안 강화를 위한 망분리 ISP 사업', sector: '공공', status: '', detail: '사업 컨설팅 및 제안 참여', sortOrder: 30 },
  { year: '2026', client: '통신사 협력', title: '국가망보안체계(N2SF) 사업 협력', sector: '민간', status: '', detail: '솔루션 제안 및 컨설팅 참여 (w/ 통신사)', sortOrder: 40 },
  { year: '2025', client: 'IT 기업', title: '홈페이지 구축 / 유지보수 사업', sector: '민간', status: '진행중', detail: '기획 및 홈페이지 구축 / 유지보수 (2025~2026)', sortOrder: 10 },
  { year: '2025', client: '방산기업', title: '스마트 팩토리 적용을 위한 특화망 5G 사업', sector: '민간', status: '진행중', detail: '제안 컨설팅 및 POC 진행 (2025~2026)', sortOrder: 20 },
  { year: '2025', client: '행정안전부 / 국가정보자원관리원', title: '국가정보자원관리원 국가정보통신망 백본전송망 구축·운영사업', sector: '공공', status: '진행중', detail: '제안 컨설팅 및 추가 제안 · 사업 수행 중 (2025~2026)', sortOrder: 30 },
  { year: '2025', client: '중소벤처기업부', title: '중소기업 기술유출방지시스템 구축사업', sector: '공공', status: '', detail: '사업 컨설팅 · 사업 수행 및 구축 완료 (화장품 협력 회사)', sortOrder: 40 },
  { year: '2025', client: '주택도시보증공사', title: '정보통신회선 이원화 사업자 선정 사업', sector: '공공', status: '', detail: '추가 제안 참여', sortOrder: 50 },
  { year: '2024', client: '원주시 · 정선군', title: '원정밸리 자원산업기반 디지털 전환 사업', sector: '공공', status: '', detail: '컨설팅 제안 참여 · 컨소시엄 제안컨설팅 (w/ KPMG, 에릭슨, CJ, 두산)', sortOrder: 10 },
  { year: '2024', client: 'NIPA (정보통신산업진흥원)', title: '28GHz 특화망 5G 산업융합 확산 과제', sector: '공공', status: '', detail: '제안 · 수주 및 수행 (w/ 한라대, TTA)', sortOrder: 20 },
  { year: '2024', client: '국토부', title: '국토부 강소형 스마트시티', sector: '공공', status: '', detail: '제안 참여 (w/ 원주시, KPMG)', sortOrder: 30 },
  { year: '2023', client: 'NIA (한국지능정보사회진흥원)', title: '특화망 5G 융합서비스 테스트베드 실증과제 사업', sector: '공공', status: '', detail: '제안 (w/ SKNS, AI업체)', sortOrder: 10 }
];

function sbHeaders(extra) {
  return Object.assign({
    'apikey': SUPABASE_KEY,
    'Authorization': 'Bearer ' + SUPABASE_KEY,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  }, extra || {});
}

async function sbGet(table, query) {
  var res = await fetch(SUPABASE_URL + '/rest/v1/' + table + '?' + (query || ''), { headers: sbHeaders() });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function sbInsert(table, data) {
  var res = await fetch(SUPABASE_URL + '/rest/v1/' + table, {
    method: 'POST', headers: sbHeaders(), body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function sbUpdate(table, id, data) {
  var res = await fetch(SUPABASE_URL + '/rest/v1/' + table + '?id=eq.' + id, {
    method: 'PATCH', headers: sbHeaders(), body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function sbDelete(table, id) {
  var res = await fetch(SUPABASE_URL + '/rest/v1/' + table + '?id=eq.' + id, {
    method: 'DELETE', headers: sbHeaders()
  });
  if (!res.ok) throw new Error(await res.text());
}

/* ═══════════════════════════════════════════
   AUTH
   ═══════════════════════════════════════════ */
var ADMIN_ID = 'admin';
var ADMIN_PW = '638500';

function handleLogin(e) {
  e.preventDefault();
  var id = document.getElementById('loginId').value.trim();
  var pw = document.getElementById('loginPw').value.trim();
  if (id === ADMIN_ID && pw === ADMIN_PW) {
    sessionStorage.setItem('bmicns_admin', 'true');
    showDashboard();
  } else {
    document.getElementById('loginError').style.display = 'block';
    document.getElementById('loginPw').value = '';
  }
}

function handleLogout() {
  sessionStorage.removeItem('bmicns_admin');
  location.reload();
}

async function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  await ensureCmsSeedData();
  await Promise.all([loadNewsList(), loadPlatformList(), loadPortfolioList(), loadStats()]);
  loadVisitorChart();
  switchTab('platform');
}

if (sessionStorage.getItem('bmicns_admin') === 'true') {
  showDashboard();
}

/* ═══════════════════════════════════════════
   TABS
   ═══════════════════════════════════════════ */
function switchTab(tab) {
  var tabs = Array.from(document.querySelectorAll('.dash-tab'));
  var tabOrder = ['platform', 'portfolio', 'news', 'inquiry', 'visitor'];
  tabs.forEach(function(t, index) { t.classList.toggle('active', tabOrder[index] === tab); });
  document.getElementById('platformSection').style.display = 'none';
  document.getElementById('portfolioSection').style.display = 'none';
  document.getElementById('inquirySection').style.display = 'none';
  document.getElementById('visitorSection').style.display = 'none';
  document.getElementById('newsSection').style.display = 'none';
  if (tab === 'platform') {
    document.getElementById('platformSection').style.display = 'block';
    loadPlatformList();
  } else if (tab === 'portfolio') {
    document.getElementById('portfolioSection').style.display = 'block';
    loadPortfolioList();
  } else if (tab === 'news') {
    document.getElementById('newsSection').style.display = 'block';
    loadNewsList();
  } else if (tab === 'inquiry') {
    document.getElementById('inquirySection').style.display = 'block';
    loadInquiries();
  } else if (tab === 'visitor') {
    document.getElementById('visitorSection').style.display = 'block';
    document.getElementById('visitorSection').classList.remove('visitor-section');
  }
}

/* ═══════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════ */
async function loadStats() {
  var today = new Date().toISOString().split('T')[0];
  var yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  var yesterdayStr = yesterday.toISOString().split('T')[0];

  try {
    var visitRows = await sbGet('visits', 'select=date,count&order=date.desc&limit=60');
    var vmap = {};
    visitRows.forEach(function(r) { vmap[r.date] = r.count; });

    var todayCount = vmap[today] || 0;
    var yesterdayCount = vmap[yesterdayStr] || 0;
    var weekTotal = 0, lastWeekTotal = 0, total = 0;
    for (var i = 0; i < 7; i++) { var d = new Date(); d.setDate(d.getDate()-i); weekTotal += vmap[d.toISOString().split('T')[0]] || 0; }
    for (var j = 7; j < 14; j++) { var d2 = new Date(); d2.setDate(d2.getDate()-j); lastWeekTotal += vmap[d2.toISOString().split('T')[0]] || 0; }
    visitRows.forEach(function(r) { total += r.count; });

    var todayDiff = todayCount - yesterdayCount;
    document.getElementById('statToday').textContent = todayCount;
    document.getElementById('statTodaySub').textContent = todayDiff > 0 ? '어제 대비 +' + todayDiff : todayDiff < 0 ? '어제 대비 ' + todayDiff : '어제와 동일';
    document.getElementById('statWeek').textContent = weekTotal;
    var weekDiff = weekTotal - lastWeekTotal;
    document.getElementById('statWeekSub').textContent = weekDiff > 0 ? '지난주 대비 +' + weekDiff : weekDiff < 0 ? '지난주 대비 ' + weekDiff : '지난주와 동일';
    document.getElementById('statTotal').innerHTML = '<span class="accent">' + total + '</span>';
  } catch(e) {
    document.getElementById('statToday').textContent = '-';
    document.getElementById('statWeek').textContent = '-';
    document.getElementById('statTotal').innerHTML = '<span class="accent">-</span>';
  }

  try {
    var inquiries = await sbGet('inquiries', 'select=id,created_at&order=created_at.desc');
    document.getElementById('statInquiry').innerHTML = '<span class="accent">' + inquiries.length + '</span>';
    var todayInq = inquiries.filter(function(inq) { return inq.created_at && inq.created_at.startsWith(today); }).length;
    document.getElementById('statInquirySub').textContent = '오늘 ' + todayInq + '건 접수';

    var news = await sbGet('news', 'select=id,created_at,category&order=created_at.desc');
    var filteredNews = news.filter(function(item) { return NEWS_ONLY_CATEGORIES.indexOf(item.category) !== -1; });
    document.getElementById('statNews').innerHTML = '<span class="accent">' + filteredNews.length + '</span>';
    var thisMonth = today.substring(0, 7);
    var thisMonthNews = filteredNews.filter(function(n) { return n.created_at && n.created_at.startsWith(thisMonth); }).length;
    document.getElementById('statNewsSub').textContent = '이번 달 ' + thisMonthNews + '건 등록';
  } catch(e) { console.error('Stats load error:', e); }
}

/* ═══════════════════════════════════════════
   INQUIRIES TABLE
   ═══════════════════════════════════════════ */
var _inquiries = [];

async function loadInquiries() {
  var container = document.getElementById('inquiryTableBody');
  container.innerHTML = '<div class="empty-state"><p>불러오는 중...</p></div>';
  try {
    _inquiries = await sbGet('inquiries', 'select=*&order=created_at.desc');
    document.getElementById('inquiryCount').textContent = _inquiries.length + '건';

    if (_inquiries.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div><p>아직 접수된 문의가 없습니다.</p></div>';
      return;
    }

    var html = '<table class="dash-table"><thead><tr>';
    html += '<th>이름</th><th>회사</th><th>연락처</th><th>솔루션</th><th>문의내용</th><th>접수일</th>';
    html += '</tr></thead><tbody>';

    _inquiries.forEach(function(inq) {
      var platforms = Array.isArray(inq.platforms) ? inq.platforms.join(', ') : (inq.platforms || '-');
      html += '<tr style="cursor:pointer" onclick="showDetail(\'' + inq.id + '\')">';
      html += '<td class="td-name">' + esc(inq.name || '-') + '</td>';
      html += '<td>' + esc(inq.company || '-') + '</td>';
      html += '<td>' + esc(inq.phone || '-') + '</td>';
      html += '<td><span class="td-solution">' + esc(platforms) + '</span></td>';
      html += '<td class="td-content">' + esc(inq.message || '-') + '</td>';
      html += '<td class="td-date">' + formatDate(inq.created_at) + '</td>';
      html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
  } catch(e) {
    container.innerHTML = '<div class="empty-state"><p>불러오기 실패: ' + esc(e.message) + '</p></div>';
  }
}

function showDetail(id) {
  var inq = _inquiries.find(function(i) { return i.id === id; });
  if (!inq) return;
  var platforms = Array.isArray(inq.platforms) ? inq.platforms.join(', ') : (inq.platforms || '-');

  var html = '<h3>문의 상세</h3>';
  html += '<div class="detail-row"><span class="detail-label">이름</span><span class="detail-value">' + esc(inq.name) + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">회사/기관</span><span class="detail-value">' + esc(inq.company || '-') + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">이메일</span><span class="detail-value">' + esc(inq.email || '-') + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">연락처</span><span class="detail-value">' + esc(inq.phone || '-') + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">관심 솔루션</span><span class="detail-value">' + esc(platforms) + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">문의 내용</span><span class="detail-value" style="white-space:pre-wrap">' + esc(inq.message || '-') + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">접수일시</span><span class="detail-value">' + formatDate(inq.created_at) + '</span></div>';
  html += '<button class="detail-close" onclick="closeDetail()">닫기</button>';

  document.getElementById('detailContent').innerHTML = html;
  document.getElementById('detailModal').classList.add('active');
}

function closeDetail() {
  document.getElementById('detailModal').classList.remove('active');
}

document.getElementById('detailModal').addEventListener('click', function(e) {
  if (e.target === this) closeDetail();
});

function openNewsModal() {
  document.getElementById('newsModal').classList.add('active');
}

function closeNewsModal() {
  document.getElementById('newsModal').classList.remove('active');
  resetNewsForm();
}

document.getElementById('newsModal').addEventListener('click', function(e) {
  if (e.target === this) closeNewsModal();
});

document.getElementById('useThumbnail').addEventListener('change', function() {
  if (this.checked) {
    newsImageData = bodyImages.length > 0 ? bodyImages[0].data : '';
  } else {
    newsImageData = '';
  }
});

/* ═══════════════════════════════════════════
   VISITOR CHART (Supabase)
   ═══════════════════════════════════════════ */
async function loadVisitorChart() {
  var chartEl = document.getElementById('visitorChart');
  var tableContainer = document.getElementById('visitorTableBody');
  chartEl.innerHTML = '<p style="color:var(--color-text-muted);font-size:13px">불러오는 중...</p>';

  var rows;
  try {
    rows = await sbGet('visits', 'select=date,count&order=date.desc&limit=60');
  } catch(e) {
    chartEl.innerHTML = '<p style="color:var(--color-text-muted);font-size:13px">통계를 불러올 수 없습니다.</p>';
    return;
  }

  // 날짜→count 맵
  var map = {};
  rows.forEach(function(r) { map[r.date] = r.count; });

  // 최근 7일 차트
  var days = [];
  var maxVal = 1;
  var dayNames = ['일','월','화','수','목','금','토'];
  for (var i = 6; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var dateStr = d.toISOString().split('T')[0];
    var count = map[dateStr] || 0;
    if (count > maxVal) maxVal = count;
    days.push({ label: (d.getMonth()+1) + '/' + d.getDate(), dayName: dayNames[d.getDay()], count: count });
  }

  var chartHtml = '';
  days.forEach(function(day) {
    var height = Math.max(4, (day.count / maxVal) * 160);
    chartHtml += '<div class="chart-bar-wrap">';
    chartHtml += '<span class="chart-bar-value">' + day.count + '</span>';
    chartHtml += '<div class="chart-bar" style="height:' + height + 'px"></div>';
    chartHtml += '<span class="chart-bar-label">' + day.label + '<br><span style="font-size:10px;color:var(--color-text-muted)">' + day.dayName + '</span></span>';
    chartHtml += '</div>';
  });
  chartEl.innerHTML = chartHtml;

  // 일별 기록 테이블 (최근 30일)
  if (rows.length === 0) {
    tableContainer.innerHTML = '<div class="empty-state"><div class="empty-icon">📊</div><p>방문 기록이 없습니다.</p></div>';
    return;
  }
  var tableHtml = '<table class="dash-table"><thead><tr><th>날짜</th><th>요일</th><th>방문수</th></tr></thead><tbody>';
  rows.slice(0, 30).forEach(function(r) {
    var d = new Date(r.date);
    tableHtml += '<tr><td>' + r.date + '</td><td>' + dayNames[d.getDay()] + '</td><td style="font-weight:600">' + r.count + '</td></tr>';
  });
  tableHtml += '</tbody></table>';
  tableContainer.innerHTML = tableHtml;
}

/* ═══════════════════════════════════════════
   UTILS
   ═══════════════════════════════════════════ */
function esc(str) {
  if (!str) return '';
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function formatDate(str) {
  if (!str) return '-';
  var d = new Date(str);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0') + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

/* ═══════════════════════════════════════════
   IMAGE UPLOAD
   ═══════════════════════════════════════════ */
var newsImageData = '';

(function() {
  var area = document.getElementById('newsImgUpload');
  if (!area) return;
  area.addEventListener('dragover', function(e) { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', function() { area.classList.remove('drag-over'); });
  area.addEventListener('drop', function(e) {
    e.preventDefault(); area.classList.remove('drag-over');
    var files = e.dataTransfer.files;
    if (files.length > 0) processImageFile(files[0]);
  });
})();

function handleImageSelect(e) {
  var file = e.target.files[0];
  if (file) processImageFile(file);
}

function processImageFile(file) {
  if (!file.type.startsWith('image/')) { alert('이미지 파일만 업로드할 수 있습니다.'); return; }
  if (file.size > 2 * 1024 * 1024) { alert('파일 크기는 2MB 이하만 가능합니다.'); return; }
  var reader = new FileReader();
  reader.onload = function(e) {
    newsImageData = e.target.result;
    showImagePreview(newsImageData);
    document.getElementById('newsThumbnail').value = '';
  };
  reader.readAsDataURL(file);
}

function handleUrlInput(url) {
  if (url.trim()) {
    newsImageData = url.trim();
    showImagePreview(newsImageData);
  } else { removeNewsImage(); }
}

function showImagePreview(src) {
  document.getElementById('newsImgPreviewSrc').src = src;
  document.getElementById('newsImgPreview').style.display = 'block';
  document.getElementById('newsImgUpload').style.display = 'none';
}

function removeNewsImage() {
  newsImageData = '';
  document.getElementById('newsImgPreview').style.display = 'none';
  document.getElementById('newsImgUpload').style.display = 'block';
  document.getElementById('newsImgPreviewSrc').src = '';
  document.getElementById('newsImageFile').value = '';
  document.getElementById('newsThumbnail').value = '';
}

/* ═══════════════════════════════════════════
   BODY IMAGES
   ═══════════════════════════════════════════ */
var bodyImages = [];

function addBodyImage(e) {
  var file = e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { alert('이미지 파일만 업로드할 수 있습니다.'); return; }
  if (file.size > 2 * 1024 * 1024) { alert('파일 크기는 2MB 이하만 가능합니다.'); return; }

  var reader = new FileReader();
  reader.onload = function(ev) {
    var idx = bodyImages.length + 1;
    var tag = '[이미지' + idx + ']';
    bodyImages.push({ data: ev.target.result, tag: tag });
    renderBodyImages();
    insertTagAtCursor(tag);
    if (document.getElementById('useThumbnail').checked) {
      newsImageData = bodyImages[0].data;
    }
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

function insertTagAtCursor(tag) {
  var ta = document.getElementById('newsContent');
  var start = ta.selectionStart, end = ta.selectionEnd, val = ta.value;
  ta.value = val.substring(0, start) + tag + val.substring(end);
  ta.selectionStart = ta.selectionEnd = start + tag.length;
  ta.focus();
}

function insertBodyImageTag(idx) { insertTagAtCursor(bodyImages[idx].tag); }

function removeBodyImage(idx) {
  var tag = bodyImages[idx].tag;
  var ta = document.getElementById('newsContent');
  ta.value = ta.value.split(tag).join('');
  bodyImages.splice(idx, 1);
  for (var i = 0; i < bodyImages.length; i++) {
    var oldTag = bodyImages[i].tag, newTag = '[이미지' + (i + 1) + ']';
    if (oldTag !== newTag) { ta.value = ta.value.split(oldTag).join(newTag); bodyImages[i].tag = newTag; }
  }
  renderBodyImages();
  if (document.getElementById('useThumbnail').checked) {
    newsImageData = bodyImages.length > 0 ? bodyImages[0].data : '';
  }
}

function renderBodyImages() {
  var container = document.getElementById('bodyImgList');
  var hint = document.getElementById('bodyImgHint');
  if (bodyImages.length === 0) { container.innerHTML = ''; hint.style.display = 'none'; return; }
  hint.style.display = 'block';
  var html = '';
  bodyImages.forEach(function(img, i) {
    html += '<div class="body-img-item" onclick="insertBodyImageTag(' + i + ')" title="클릭하여 본문에 삽입">';
    html += '<img src="' + img.data + '" alt="">';
    html += '<span class="body-img-badge">' + img.tag + '</span>';
    html += '<button class="body-img-remove" onclick="event.stopPropagation(); removeBodyImage(' + i + ')">×</button>';
    html += '</div>';
  });
  container.innerHTML = html;
}

/* ═══════════════════════════════════════════
   NEWS CRUD (Supabase)
   ═══════════════════════════════════════════ */
var _newsList = [];
var _platformList = [];
var _portfolioList = [];

function parseCmsJson(row) {
  if (!row || !row.content) return {};
  try {
    return JSON.parse(row.content);
  } catch (e) {
    return {};
  }
}

function linesToArray(value) {
  return (value || '').split('\n').map(function(line) { return line.trim(); }).filter(Boolean);
}

function commaSeparatedToArray(value) {
  return (value || '').split(',').map(function(item) { return item.trim(); }).filter(Boolean);
}

function normalizeSortOrder(value) {
  var num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

async function ensureCmsSeedData() {
  await ensureCategorySeed(CMS_PLATFORM_CATEGORY, DEFAULT_PLATFORM_ITEMS.map(function(item) {
    return {
      category: CMS_PLATFORM_CATEGORY,
      title: item.title,
      summary: item.subtitle || item.headline,
      content: JSON.stringify(item),
      thumbnail: item.imageUrl || null,
      body_images: []
    };
  }));
  await ensureCategorySeed(CMS_PORTFOLIO_CATEGORY, DEFAULT_PORTFOLIO_ITEMS.map(function(item) {
    return {
      category: CMS_PORTFOLIO_CATEGORY,
      title: item.title,
      summary: item.client,
      content: JSON.stringify(item),
      thumbnail: null,
      body_images: []
    };
  }));
}

async function ensureCategorySeed(category, records) {
  var existing = await sbGet('news', 'select=id&category=eq.' + encodeURIComponent(category) + '&limit=1');
  if (existing.length > 0) return;
  for (var i = 0; i < records.length; i++) {
    await sbInsert('news', records[i]);
  }
}

function buildPlatformPayload() {
  return {
    slug: document.getElementById('platformSlug').value.trim(),
    subtitle: document.getElementById('platformSubtitle').value.trim(),
    headline: document.getElementById('platformHeadline').value.trim(),
    description: document.getElementById('platformDescription').value.trim(),
    features: linesToArray(document.getElementById('platformFeatures').value),
    demoUrl: document.getElementById('platformDemoUrl').value.trim(),
    imageUrl: document.getElementById('platformImageUrl').value.trim(),
    imageAlt: document.getElementById('platformImageAlt').value.trim(),
    theme: document.getElementById('platformTheme').value,
    sortOrder: normalizeSortOrder(document.getElementById('platformSortOrder').value)
  };
}

function buildPortfolioPayload() {
  return {
    year: document.getElementById('portfolioYear').value.trim(),
    client: document.getElementById('portfolioClient').value.trim(),
    tags: commaSeparatedToArray(document.getElementById('portfolioTags').value),
    sector: document.getElementById('portfolioSector').value,
    status: document.getElementById('portfolioStatus').value.trim(),
    detail: document.getElementById('portfolioDetail').value.trim(),
    sortOrder: normalizeSortOrder(document.getElementById('portfolioSortOrder').value)
  };
}

async function saveNews() {
  var title = document.getElementById('newsTitle').value.trim();
  var summary = document.getElementById('newsSummary').value.trim();
  var content = document.getElementById('newsContent').value.trim();
  var category = document.getElementById('newsCategory').value;
  var editId = document.getElementById('newsEditId').value;

  if (!title) { alert('제목을 입력하세요.'); return; }
  if (!content && !summary) { alert('요약 또는 본문을 입력하세요.'); return; }

  var savedBodyImages = bodyImages.map(function(img) { return { data: img.data, tag: img.tag }; });
  var data = { category: category, title: title, summary: summary, content: content, thumbnail: newsImageData || null, body_images: savedBodyImages };

  try {
    if (editId) {
      await sbUpdate('news', editId, data);
    } else {
      await sbInsert('news', data);
    }
    closeNewsModal();
    await loadNewsList();
    await loadStats();
  } catch(e) {
    alert('저장 실패: ' + e.message);
  }
}

function resetNewsForm() {
  document.getElementById('newsTitle').value = '';
  document.getElementById('newsSummary').value = '';
  document.getElementById('newsContent').value = '';
  document.getElementById('newsCategory').value = '회사소식';
  document.getElementById('newsEditId').value = '';
  document.getElementById('newsFormTitle').textContent = '새 소식 등록';
  document.getElementById('newsSubmitBtn').textContent = '등록';
  newsImageData = '';
  document.getElementById('useThumbnail').checked = false;
  bodyImages = [];
  renderBodyImages();
}

function editNews(id) {
  var news = _newsList.find(function(n) { return n.id === id; });
  if (!news) return;

  document.getElementById('newsEditId').value = id;
  document.getElementById('newsTitle').value = news.title || '';
  document.getElementById('newsSummary').value = news.summary || '';
  document.getElementById('newsContent').value = news.content || '';
  document.getElementById('newsCategory').value = news.category || '회사소식';
  bodyImages = (news.body_images || []).map(function(img) { return { data: img.data, tag: img.tag }; });
  renderBodyImages();
  newsImageData = news.thumbnail || '';
  var cb = document.getElementById('useThumbnail');
  cb.checked = !!(news.thumbnail && bodyImages.length > 0 && news.thumbnail === bodyImages[0].data);

  document.getElementById('newsFormTitle').textContent = '소식 수정';
  document.getElementById('newsSubmitBtn').textContent = '수정';
  openNewsModal();
}

async function deleteNews(id) {
  if (!confirm('이 소식을 삭제하시겠습니까?')) return;
  try {
    await sbDelete('news', id);
    await loadNewsList();
    await loadStats();
  } catch(e) {
    alert('삭제 실패: ' + e.message);
  }
}

function showNewsDetail(id) {
  var news = _newsList.find(function(n) { return n.id === id; });
  if (!news) return;

  var html = '<h3>' + esc(news.title) + '</h3>';
  html += '<div class="detail-row"><span class="detail-label">카테고리</span><span class="detail-value">' + esc(news.category || '-') + '</span></div>';
  html += '<div class="detail-row"><span class="detail-label">등록일</span><span class="detail-value">' + formatDate(news.created_at) + '</span></div>';
  if (news.summary) {
    html += '<div class="detail-row"><span class="detail-label">요약</span><span class="detail-value">' + esc(news.summary) + '</span></div>';
  }
  if (news.thumbnail) {
    html += '<div class="detail-row"><span class="detail-label">썸네일</span><span class="detail-value"><img src="' + esc(news.thumbnail) + '" style="max-width:100%;border-radius:8px;margin-top:4px"></span></div>';
  }
  if (news.content) {
    var bodyContent = esc(news.content);
    var bodyImgs = Array.isArray(news.body_images) ? news.body_images : [];
    bodyImgs.forEach(function(img) {
      bodyContent = bodyContent.split(img.tag).join('<img src="' + img.data + '" alt="" style="max-width:100%;border-radius:8px;margin:8px 0;display:block">');
    });
    html += '<div class="detail-row"><span class="detail-label">본문</span><span class="detail-value" style="white-space:pre-wrap;line-height:1.7"><span>' + bodyContent + '</span></span></div>';
  }
  html += '<div style="display:flex;gap:8px;margin-top:20px">';
  html += '<button class="detail-close" onclick="closeDetail()" style="flex:1">닫기</button>';
  html += '<button class="news-btn-edit" onclick="closeDetail(); editNews(\'' + news.id + '\')" style="flex:1;padding:12px">수정하기</button>';
  html += '</div>';

  document.getElementById('detailContent').innerHTML = html;
  document.getElementById('detailModal').classList.add('active');
}

async function loadNewsList() {
  var container = document.getElementById('newsTableBody');
  container.innerHTML = '<div class="empty-state"><p>불러오는 중...</p></div>';
  try {
    _newsList = (await sbGet('news', 'select=*&order=created_at.desc')).filter(function(item) {
      return NEWS_ONLY_CATEGORIES.indexOf(item.category) !== -1;
    });
    document.getElementById('newsCount').textContent = _newsList.length + '건';

    if (_newsList.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-icon">📰</div><p>등록된 소식이 없습니다.</p></div>';
      return;
    }

    var categoryIcons = {'회사소식':'🏢','수주':'🤝','파트너십':'🔗','공지':'📢','기술':'💡'};
    var html = '';
    _newsList.forEach(function(news) {
      var icon = categoryIcons[news.category] || '📰';
      html += '<div class="news-card" onclick="showNewsDetail(\'' + news.id + '\')" style="cursor:pointer">';
      html += '<div class="news-card-thumb">';
      if (news.thumbnail) {
        html += '<img src="' + esc(news.thumbnail) + '" alt="">';
      } else {
        html += '<span class="thumb-icon">' + icon + '</span>';
      }
      html += '</div>';
      html += '<div class="news-card-content">';
      html += '<div class="news-card-meta">';
      html += '<span class="td-solution">' + esc(news.category || '회사소식') + '</span>';
      html += '<span class="news-card-date">' + formatDate(news.created_at) + '</span>';
      html += '</div>';
      html += '<div class="news-card-title">' + esc(news.title) + '</div>';
      if (news.summary) html += '<div class="news-card-summary">' + esc(news.summary) + '</div>';
      html += '</div>';
      html += '<div class="news-card-actions" onclick="event.stopPropagation()">';
      html += '<button class="news-btn-edit" onclick="editNews(\'' + news.id + '\')">수정</button>';
      html += '<button class="news-btn-delete" onclick="deleteNews(\'' + news.id + '\')">삭제</button>';
      html += '</div>';
      html += '</div>';
    });
    container.innerHTML = html;
  } catch(e) {
    container.innerHTML = '<div class="empty-state"><p>불러오기 실패: ' + esc(e.message) + '</p></div>';
  }
}

function openPlatformModal() {
  document.getElementById('platformModal').classList.add('active');
}

function closePlatformModal() {
  document.getElementById('platformModal').classList.remove('active');
  resetPlatformForm();
}

function resetPlatformForm() {
  document.getElementById('platformEditId').value = '';
  document.getElementById('platformName').value = '';
  document.getElementById('platformSlug').value = '';
  document.getElementById('platformSubtitle').value = '';
  document.getElementById('platformHeadline').value = '';
  document.getElementById('platformDescription').value = '';
  document.getElementById('platformFeatures').value = '';
  document.getElementById('platformDemoUrl').value = '';
  document.getElementById('platformImageUrl').value = '';
  document.getElementById('platformImageAlt').value = '';
  document.getElementById('platformTheme').value = 'default';
  document.getElementById('platformSortOrder').value = '';
  document.getElementById('platformFormTitle').textContent = '플랫폼 추가';
  document.getElementById('platformSubmitBtn').textContent = '저장';
}

async function savePlatform() {
  var name = document.getElementById('platformName').value.trim();
  var editId = document.getElementById('platformEditId').value;
  var payload = buildPlatformPayload();
  if (!name || !payload.slug || !payload.headline || !payload.description) {
    alert('플랫폼명, 앵커 ID, 헤드라인, 설명을 입력하세요.');
    return;
  }
  var data = {
    category: CMS_PLATFORM_CATEGORY,
    title: name,
    summary: payload.subtitle || payload.headline,
    content: JSON.stringify(payload),
    thumbnail: payload.imageUrl || null,
    body_images: []
  };
  try {
    if (editId) {
      await sbUpdate('news', editId, data);
    } else {
      await sbInsert('news', data);
    }
    closePlatformModal();
    await Promise.all([loadPlatformList(), loadStats()]);
  } catch (e) {
    alert('저장 실패: ' + e.message);
  }
}

function editPlatform(id) {
  var item = _platformList.find(function(row) { return row.id === id; });
  if (!item) return;
  var payload = parseCmsJson(item);
  document.getElementById('platformEditId').value = item.id;
  document.getElementById('platformName').value = item.title || '';
  document.getElementById('platformSlug').value = payload.slug || '';
  document.getElementById('platformSubtitle').value = payload.subtitle || item.summary || '';
  document.getElementById('platformHeadline').value = payload.headline || '';
  document.getElementById('platformDescription').value = payload.description || '';
  document.getElementById('platformFeatures').value = (payload.features || []).join('\n');
  document.getElementById('platformDemoUrl').value = payload.demoUrl || '';
  document.getElementById('platformImageUrl').value = payload.imageUrl || item.thumbnail || '';
  document.getElementById('platformImageAlt').value = payload.imageAlt || '';
  document.getElementById('platformTheme').value = payload.theme || 'default';
  document.getElementById('platformSortOrder').value = payload.sortOrder || 0;
  document.getElementById('platformFormTitle').textContent = '플랫폼 수정';
  document.getElementById('platformSubmitBtn').textContent = '수정';
  openPlatformModal();
}

async function deletePlatform(id) {
  if (!confirm('이 플랫폼 콘텐츠를 삭제하시겠습니까?')) return;
  try {
    await sbDelete('news', id);
    await Promise.all([loadPlatformList(), loadStats()]);
  } catch (e) {
    alert('삭제 실패: ' + e.message);
  }
}

async function loadPlatformList() {
  var container = document.getElementById('platformTableBody');
  container.innerHTML = '<div class="empty-state"><p>불러오는 중...</p></div>';
  try {
    _platformList = await sbGet('news', 'select=*&category=eq.' + encodeURIComponent(CMS_PLATFORM_CATEGORY) + '&order=created_at.asc');
    _platformList.sort(function(a, b) {
      return normalizeSortOrder(parseCmsJson(a).sortOrder) - normalizeSortOrder(parseCmsJson(b).sortOrder);
    });
    document.getElementById('platformCount').textContent = _platformList.length + '건';
    if (_platformList.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-icon">🧩</div><p>등록된 플랫폼 콘텐츠가 없습니다.</p></div>';
      return;
    }
    var html = '<table class="dash-table"><thead><tr><th>이름</th><th>앵커</th><th>요약</th><th>순서</th><th>관리</th></tr></thead><tbody>';
    _platformList.forEach(function(item) {
      var payload = parseCmsJson(item);
      html += '<tr>';
      html += '<td class="td-name">' + esc(item.title || '-') + '</td>';
      html += '<td>' + esc(payload.slug || '-') + '</td>';
      html += '<td class="td-content">' + esc(payload.headline || item.summary || '-') + '</td>';
      html += '<td>' + esc(String(normalizeSortOrder(payload.sortOrder))) + '</td>';
      html += '<td><div class="news-card-actions"><button class="news-btn-edit" onclick="editPlatform(\'' + item.id + '\')">수정</button><button class="news-btn-delete" onclick="deletePlatform(\'' + item.id + '\')">삭제</button></div></td>';
      html += '</tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = '<div class="empty-state"><p>불러오기 실패: ' + esc(e.message) + '</p></div>';
  }
}

function openPortfolioModal() {
  document.getElementById('portfolioModal').classList.add('active');
}

function closePortfolioModal() {
  document.getElementById('portfolioModal').classList.remove('active');
  resetPortfolioForm();
}

function resetPortfolioForm() {
  document.getElementById('portfolioEditId').value = '';
  document.getElementById('portfolioYear').value = '';
  document.getElementById('portfolioClient').value = '';
  document.getElementById('portfolioTitle').value = '';
  document.getElementById('portfolioTags').value = '';
  document.getElementById('portfolioSector').value = '공공';
  document.getElementById('portfolioStatus').value = '';
  document.getElementById('portfolioDetail').value = '';
  document.getElementById('portfolioSortOrder').value = '';
  document.getElementById('portfolioFormTitle').textContent = '주요실적 추가';
  document.getElementById('portfolioSubmitBtn').textContent = '저장';
}

async function savePortfolio() {
  var title = document.getElementById('portfolioTitle').value.trim();
  var editId = document.getElementById('portfolioEditId').value;
  var payload = buildPortfolioPayload();
  if (!title || !payload.year || !payload.client || !payload.detail) {
    alert('연도, 고객사/기관, 프로젝트명, 상세 설명을 입력하세요.');
    return;
  }
  var data = {
    category: CMS_PORTFOLIO_CATEGORY,
    title: title,
    summary: payload.client,
    content: JSON.stringify(payload),
    thumbnail: null,
    body_images: []
  };
  try {
    if (editId) {
      await sbUpdate('news', editId, data);
    } else {
      await sbInsert('news', data);
    }
    closePortfolioModal();
    await Promise.all([loadPortfolioList(), loadStats()]);
  } catch (e) {
    alert('저장 실패: ' + e.message);
  }
}

function editPortfolio(id) {
  var item = _portfolioList.find(function(row) { return row.id === id; });
  if (!item) return;
  var payload = parseCmsJson(item);
  document.getElementById('portfolioEditId').value = item.id;
  document.getElementById('portfolioYear').value = payload.year || '';
  document.getElementById('portfolioClient').value = payload.client || item.summary || '';
  document.getElementById('portfolioTitle').value = item.title || '';
  document.getElementById('portfolioTags').value = Array.isArray(payload.tags) ? payload.tags.join(', ') : '';
  document.getElementById('portfolioSector').value = payload.sector || '공공';
  document.getElementById('portfolioStatus').value = payload.status || '';
  document.getElementById('portfolioDetail').value = payload.detail || '';
  document.getElementById('portfolioSortOrder').value = payload.sortOrder || 0;
  document.getElementById('portfolioFormTitle').textContent = '주요실적 수정';
  document.getElementById('portfolioSubmitBtn').textContent = '수정';
  openPortfolioModal();
}

async function deletePortfolio(id) {
  if (!confirm('이 주요실적 콘텐츠를 삭제하시겠습니까?')) return;
  try {
    await sbDelete('news', id);
    await Promise.all([loadPortfolioList(), loadStats()]);
  } catch (e) {
    alert('삭제 실패: ' + e.message);
  }
}

async function loadPortfolioList() {
  var container = document.getElementById('portfolioTableBody');
  container.innerHTML = '<div class="empty-state"><p>불러오는 중...</p></div>';
  try {
    _portfolioList = await sbGet('news', 'select=*&category=eq.' + encodeURIComponent(CMS_PORTFOLIO_CATEGORY) + '&order=created_at.asc');
    _portfolioList.sort(function(a, b) {
      var pa = parseCmsJson(a);
      var pb = parseCmsJson(b);
      if ((pb.year || '') !== (pa.year || '')) return String(pb.year || '').localeCompare(String(pa.year || ''));
      return normalizeSortOrder(pa.sortOrder) - normalizeSortOrder(pb.sortOrder);
    });
    document.getElementById('portfolioCount').textContent = _portfolioList.length + '건';
    if (_portfolioList.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-icon">📁</div><p>등록된 주요실적 콘텐츠가 없습니다.</p></div>';
      return;
    }
    var html = '<table class="dash-table"><thead><tr><th>연도</th><th>고객사</th><th>프로젝트</th><th>상태</th><th>관리</th></tr></thead><tbody>';
    _portfolioList.forEach(function(item) {
      var payload = parseCmsJson(item);
      html += '<tr>';
      html += '<td>' + esc(payload.year || '-') + '</td>';
      html += '<td class="td-name">' + esc(payload.client || item.summary || '-') + '</td>';
      html += '<td class="td-content">' + esc(item.title || '-') + (Array.isArray(payload.tags) && payload.tags.length ? ' · ' + esc(payload.tags.join(', ')) : '') + '</td>';
      html += '<td>' + esc(payload.status || '-') + '</td>';
      html += '<td><div class="news-card-actions"><button class="news-btn-edit" onclick="editPortfolio(\'' + item.id + '\')">수정</button><button class="news-btn-delete" onclick="deletePortfolio(\'' + item.id + '\')">삭제</button></div></td>';
      html += '</tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = '<div class="empty-state"><p>불러오기 실패: ' + esc(e.message) + '</p></div>';
  }
}

document.getElementById('platformModal').addEventListener('click', function(e) {
  if (e.target === this) closePlatformModal();
});

document.getElementById('portfolioModal').addEventListener('click', function(e) {
  if (e.target === this) closePortfolioModal();
});
