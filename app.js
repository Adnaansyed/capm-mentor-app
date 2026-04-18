// ============================================================
//  CAPM MENTOR — APP.JS
//  Core application logic
// ============================================================

// ── State ────────────────────────────────────────────────────
let state = {
  currentDay:   1,
  completedDays: [],
  doneTodayMap: {},   // { dayN: { concept, task, revision, interview } }
  notes:        {},   // { topicId: "note text" }
  weeklyTasks:  {},   // { "week-task-idx": true }
  streak:       0,
  lastVisit:    null,
};

function loadState() {
  try {
    const saved = localStorage.getItem('capm-mentor-state');
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch(e) {}
}

function saveState() {
  try { localStorage.setItem('capm-mentor-state', JSON.stringify(state)); } catch(e) {}
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreak();
  renderAll();
  showSection('dashboard');
});

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastVisit === yesterday) { state.streak++; }
  else if (state.lastVisit !== today) { state.streak = 1; }
  state.lastVisit = today;
  saveState();
}

// ── Render All ───────────────────────────────────────────────
function renderAll() {
  renderDashboard();
  renderRoadmap();
  renderDailyTabs();
  renderConcepts();
  renderInterviews();
  renderNotes();
  renderProgress();
  renderWeekly();
  updateStats();
}

// ── Dashboard ────────────────────────────────────────────────
function renderDashboard() {
  const d = THIRTY_DAYS[state.currentDay - 1];
  if (!d) return;

  // Date
  const now = new Date();
  document.getElementById('dateBadge').textContent =
    now.toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  document.getElementById('mobileDayBadge').textContent = `Day ${state.currentDay}`;

  // Day navigator
  document.getElementById('dayNumDisplay').textContent = `Day ${d.day}`;
  document.getElementById('dayTopicDisplay').textContent = d.topic;

  // Cards
  setText('todayConcept', d.concept);
  setText('todayConceptDesc', d.conceptDesc);
  setText('todayTask', d.task);
  setText('todayTaskDesc', d.taskDesc);
  setText('todayRevision', d.revision);
  setText('todayRevisionDesc', d.revisionDesc);
  setText('todayInterview', d.interviewQ);
  setText('todayInterviewAnswer', d.interviewA ? d.interviewA.substring(0,120) + '…' : '—');

  // Standout
  const ss = STANDOUT_SKILLS[(state.currentDay - 1) % STANDOUT_SKILLS.length];
  setText('standoutTitle', ss.title);
  setText('standoutBody', ss.body);

  // Mark done buttons
  const doneMap = state.doneTodayMap[state.currentDay] || {};
  ['concept','task','revision','interview'].forEach(k => {
    const btn = document.querySelector(`button[onclick="markDone('${k}')"]`);
    if (btn && doneMap[k]) btn.classList.add('done');
  });

  updateStats();
}

function updateStats() {
  const done = state.completedDays.length;
  const pct = Math.round((done / 30) * 100);
  const weekDays = [1,2,3,4,5,6,7].map(i => state.currentDay - (state.currentDay % 7) + i).filter(i => i >= 1 && i <= 30);
  const weekDone = weekDays.filter(d => state.completedDays.includes(d)).length;
  const weekPct = Math.round((weekDone / 7) * 100);

  setText('statCompleted', done);
  setText('statPending', 30 - done);
  setText('statWeekPct', weekPct + '%');
  setText('statDayNum', state.currentDay);
  setText('streakCount', state.streak + ' days');
  document.getElementById('mobileDayBadge').textContent = `Day ${state.currentDay}`;
}

// ── Day Navigation ───────────────────────────────────────────
function changeDay(delta) {
  const next = state.currentDay + delta;
  if (next < 1 || next > 30) return;
  state.currentDay = next;
  saveState();
  renderDashboard();
  renderDailyTabs();
}

// ── Mark Done ────────────────────────────────────────────────
function markDone(type) {
  if (!state.doneTodayMap[state.currentDay]) state.doneTodayMap[state.currentDay] = {};
  state.doneTodayMap[state.currentDay][type] = true;

  // Auto-complete day when all 4 done
  const dm = state.doneTodayMap[state.currentDay];
  if (dm.concept && dm.task && dm.revision && dm.interview) {
    if (!state.completedDays.includes(state.currentDay)) {
      state.completedDays.push(state.currentDay);
    }
  }

  saveState();
  renderDashboard();
  renderProgress();

  // Button feedback
  const btn = event.target;
  btn.classList.add('done');
  btn.textContent = '✓ Done!';
}

// ── Roadmap ──────────────────────────────────────────────────
function renderRoadmap() {
  const grid = document.getElementById('roadmapGrid');
  grid.innerHTML = ROADMAP_TOPICS.map((topic, i) => {
    const dayNums = topic.days.split('–').map(Number);
    const isDone = dayNums.every(d => state.completedDays.includes(d));
    const isActive = dayNums.includes(state.currentDay);
    let cls = 'roadmap-card';
    if (isDone) cls += ' done';
    if (isActive) cls += ' active-today';

    return `
    <div class="${cls}" title="${topic.description}" onclick="goToTopic(${i})">
      <div class="roadmap-status"></div>
      <div class="roadmap-num">Day ${topic.days}</div>
      <div class="roadmap-title">${topic.title}</div>
      <div class="roadmap-days" style="margin-top:8px;font-size:11px;color:var(--text3)">${topic.description.substring(0,60)}…</div>
    </div>`;
  }).join('');
}

function goToTopic(idx) {
  const topic = ROADMAP_TOPICS[idx];
  const day = parseInt(topic.days.split('–')[0]);
  state.currentDay = day;
  saveState();
  renderAll();
  showSection('dashboard');
}

// ── Daily Tabs ───────────────────────────────────────────────
function renderDailyTabs() {
  const d = THIRTY_DAYS[state.currentDay - 1];
  if (!d) return;

  setText('dt-conceptTitle', `📘 ${d.concept}`);
  setHTML('dt-conceptCode', escHtml(d.conceptCode || ''));
  setText('dt-conceptBody', d.conceptDesc);

  setText('dt-taskTitle', `⚙️ ${d.task}`);
  setHTML('dt-taskCode', escHtml(d.taskCode || ''));
  setText('dt-taskBody', d.taskDesc);

  setText('dt-debugBody', `🐛 ${d.debugQ}`);
  setHTML('dt-debugCode', escHtml(d.debugCode || ''));
  setHTML('dt-debugFix', escHtml(d.debugFix || ''));

  setText('dt-interviewQ', `❓ ${d.interviewQ}`);
  setText('dt-interviewA', d.interviewA || '—');
  const ab = document.getElementById('dt-interviewA');
  if (ab) ab.classList.add('hidden');

  setHTML('dt-revisionContent', d.revisionContent || d.revisionDesc);
}

function showTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function revealAnswer() {
  const box = document.getElementById('dt-interviewA');
  box.classList.toggle('hidden');
  event.target.textContent = box.classList.contains('hidden') ? 'Reveal Model Answer' : 'Hide Answer';
}

// ── Concepts ─────────────────────────────────────────────────
function renderConcepts() {
  const list = document.getElementById('conceptsList');
  list.innerHTML = THIRTY_DAYS.map((d, i) => {
    const done = state.completedDays.includes(d.day);
    return `
    <div class="concept-item" onclick="jumpToDay(${d.day})">
      <div class="concept-num">#${String(d.day).padStart(2,'0')}</div>
      <div class="concept-info">
        <div class="concept-title">${d.concept} ${done ? '✅' : ''}</div>
        <div class="concept-desc">${d.conceptDesc.substring(0,80)}…</div>
      </div>
      <div class="concept-day">Day ${d.day}</div>
    </div>`;
  }).join('');
}

function jumpToDay(day) {
  state.currentDay = day;
  saveState();
  renderAll();
  showSection('daily');
}

// ── Interview Prep ───────────────────────────────────────────
function renderInterviews() {
  const list = document.getElementById('interviewList');
  list.innerHTML = INTERVIEW_QA.map((qa, i) => `
    <div class="interview-item">
      <div class="interview-q">Q${i+1}. ${qa.q}</div>
      <span class="interview-toggle" onclick="toggleAnswer(this)">▼ Show Answer</span>
      <div class="interview-a">${qa.a}</div>
    </div>
  `).join('');
}

function toggleAnswer(el) {
  const ans = el.nextElementSibling;
  const shown = ans.style.display === 'block';
  ans.style.display = shown ? 'none' : 'block';
  el.textContent = shown ? '▼ Show Answer' : '▲ Hide Answer';
}

// ── Notes ────────────────────────────────────────────────────
let activeNoteTopicId = null;

function renderNotes() {
  const tl = document.getElementById('notesTopicList');
  tl.innerHTML = ROADMAP_TOPICS.map(t => `
    <button class="notes-topic-btn" data-id="${t.id}" onclick="selectNoteTopic('${t.id}','${t.title}',this)">
      ${t.title}
    </button>
  `).join('');
}

function selectNoteTopic(id, title, btn) {
  activeNoteTopicId = id;
  document.querySelectorAll('.notes-topic-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  setText('activeNoteTopic', title);
  const ta = document.getElementById('notesTextarea');
  ta.value = state.notes[id] || '';
  ta.focus();
  document.getElementById('notesSaved').classList.remove('visible');
}

function saveNote() {
  if (!activeNoteTopicId) return;
  state.notes[activeNoteTopicId] = document.getElementById('notesTextarea').value;
  saveState();
  const saved = document.getElementById('notesSaved');
  saved.classList.add('visible');
  clearTimeout(window._noteSaveTimer);
  window._noteSaveTimer = setTimeout(() => saved.classList.remove('visible'), 2000);
}

// ── Progress ─────────────────────────────────────────────────
function renderProgress() {
  const done = state.completedDays.length;
  const pct = Math.round((done / 30) * 100);

  setText('overallPct', pct + '%');
  setText('ps-done', done);
  setText('ps-pending', 30 - done);
  setText('ps-streak', state.streak);

  // Ring
  const circumference = 2 * Math.PI * 50; // 314
  const offset = circumference - (pct / 100) * circumference;
  const ring = document.getElementById('progressRing');
  if (ring) { ring.style.strokeDashoffset = offset; }

  // Topic progress bars
  const tpl = document.getElementById('topicProgressList');
  tpl.innerHTML = ROADMAP_TOPICS.map(topic => {
    const dayNums = parseDayRange(topic.days);
    const topicDone = dayNums.filter(d => state.completedDays.includes(d)).length;
    const topicPct = dayNums.length > 0 ? Math.round((topicDone / dayNums.length) * 100) : 0;
    return `
    <div class="tp-item">
      <div class="tp-label">${topic.title}</div>
      <div class="tp-bar-bg"><div class="tp-bar" style="width:${topicPct}%"></div></div>
      <div class="tp-pct">${topicPct}%</div>
    </div>`;
  }).join('');

  // Calendar
  const cal = document.getElementById('dayCalendar');
  cal.innerHTML = Array.from({length: 30}, (_, i) => {
    const day = i + 1;
    const done2 = state.completedDays.includes(day);
    const isToday = day === state.currentDay;
    let cls = 'cal-day';
    if (done2) cls += ' done';
    if (isToday) cls += ' today';
    return `<div class="${cls}" onclick="jumpToDay(${day})" title="Day ${day}">${day}</div>`;
  }).join('');
}

function parseDayRange(str) {
  const parts = str.split('–').map(Number);
  if (parts.length === 1) return [parts[0]];
  const result = [];
  for (let i = parts[0]; i <= parts[1]; i++) result.push(i);
  return result;
}

// ── Weekly Goals ─────────────────────────────────────────────
function renderWeekly() {
  const grid = document.getElementById('weeklyGrid');
  grid.innerHTML = WEEKLY_GOALS.map((week, wi) => {
    const statusClass = week.status === 'current' ? 'current' : week.status === 'complete' ? '' : 'upcoming';
    const statusLabel = week.status === 'current' ? '🔥 This Week' : week.status === 'complete' ? '✅ Complete' : '⏳ Upcoming';

    const tasks = week.tasks.map((task, ti) => {
      const key = `${wi}-${ti}`;
      const checked = state.weeklyTasks[key];
      return `
      <div class="week-task">
        <div class="task-check ${checked ? 'checked' : ''}" onclick="toggleWeekTask('${key}',this)">
          ${checked ? '✓' : ''}
        </div>
        <span>${task}</span>
      </div>`;
    }).join('');

    return `
    <div class="week-card">
      <div class="week-card-header">
        <div class="week-title">Week ${week.week} — ${week.title}</div>
        <div class="week-badge ${statusClass}">${statusLabel}</div>
      </div>
      <div class="week-target">🎯 <strong>Target:</strong> ${week.target}</div>
      <div class="week-tasks">${tasks}</div>
    </div>`;
  }).join('');
}

function toggleWeekTask(key, el) {
  state.weeklyTasks[key] = !state.weeklyTasks[key];
  saveState();
  el.classList.toggle('checked');
  el.textContent = state.weeklyTasks[key] ? '✓' : '';
}

// ── Section Navigation ───────────────────────────────────────
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const sec = document.getElementById('section-' + name);
  if (sec) sec.classList.add('active');

  const nav = document.querySelector(`.nav-item[data-section="${name}"]`);
  if (nav) nav.classList.add('active');

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

// ── Sidebar Toggle ───────────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ── Helpers ──────────────────────────────────────────────────
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val || '—';
}

function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val || '';
}

function escHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const burger = document.querySelector('.burger');
  if (!sidebar.contains(e.target) && e.target !== burger) {
    sidebar.classList.remove('open');
  }
});
