const STORAGE_KEY = 'subd-quiz-state-v3';
const QUIZ_VERSION = 3;
const EXPECTED_COUNT = 120;

let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = [];
let activeQuestions = [];
let isFinished = false;

try { localStorage.removeItem('subd-quiz-state'); } catch (e) {}
try { localStorage.removeItem('subd-quiz-state-v2'); } catch (e) {}

window.addEventListener('DOMContentLoaded', () => {
  const saved = loadState();
  if (saved && saved.version === QUIZ_VERSION && saved.activeQuestions && saved.activeQuestions.length === EXPECTED_COUNT) {
    showResumeButton();
  } else if (saved) {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }
});

function showResumeButton() {
  const startScreen = document.getElementById('start-screen');
  if (document.getElementById('resume-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'resume-btn';
  btn.className = 'btn';
  btn.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
  btn.textContent = 'Продолжить с того места';
  btn.onclick = resumeQuiz;
  startScreen.appendChild(document.createElement('br'));
  startScreen.appendChild(btn);

  const clearBtn = document.createElement('button');
  clearBtn.className = 'btn btn-secondary';
  clearBtn.style.fontSize = '13px';
  clearBtn.style.padding = '8px 16px';
  clearBtn.textContent = 'Сбросить сохранённый прогресс';
  clearBtn.onclick = () => {
    localStorage.removeItem(STORAGE_KEY);
    btn.remove();
    clearBtn.remove();
  };
  startScreen.appendChild(document.createElement('br'));
  startScreen.appendChild(clearBtn);
}

function shuffleOptions(q) {
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...q,
    options: indices.map(i => q.options[i]),
    correct: indices.indexOf(q.correct)
  };
}

function startQuiz(shuffle) {
  activeQuestions = QUESTIONS.map(shuffleOptions);
  if (shuffle) {
    for (let i = activeQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [activeQuestions[i], activeQuestions[j]] = [activeQuestions[j], activeQuestions[i]];
    }
  }
  answered = new Array(activeQuestions.length).fill(null);
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  isFinished = false;
  switchToQuiz();
  saveState();
  renderQuestion();
}

function resumeQuiz() {
  const saved = loadState();
  if (!saved) return;
  activeQuestions = saved.activeQuestions;
  answered = saved.answered;
  currentIndex = saved.currentIndex;
  correctCount = saved.correctCount;
  wrongCount = saved.wrongCount;
  isFinished = false;
  switchToQuiz();
  renderQuestion();
}

function switchToQuiz() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  document.getElementById('total-num').textContent = activeQuestions.length;
  document.getElementById('final-total').textContent = activeQuestions.length;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: QUIZ_VERSION, activeQuestions, answered, currentIndex, correctCount, wrongCount
    }));
  } catch (e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function renderQuestion() {
  const q = activeQuestions[currentIndex];
  document.getElementById('current-num').textContent = currentIndex + 1;
  document.getElementById('topic-badge').textContent = q.topic;
  document.getElementById('question-text').textContent = q.question;

  const codeContainer = document.getElementById('code-container');
  if (q.code) {
    codeContainer.innerHTML = '';
    const codeDiv = document.createElement('div');
    codeDiv.className = 'code-block';
    codeDiv.textContent = q.code;
    codeContainer.appendChild(codeDiv);
  } else {
    codeContainer.innerHTML = '';
  }

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    const letterSpan = document.createElement('span');
    letterSpan.className = 'letter';
    letterSpan.textContent = letters[i];
    const textSpan = document.createElement('span');
    textSpan.textContent = opt;
    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.onclick = () => selectAnswer(i);
    optionsDiv.appendChild(btn);
  });

  document.getElementById('feedback').classList.remove('show', 'correct', 'wrong');
  document.getElementById('feedback').textContent = '';

  const prev = answered[currentIndex];
  if (prev !== null) {
    showAnswer(prev);
  }

  document.getElementById('prev-btn').disabled = currentIndex === 0;
  const nextBtn = document.getElementById('next-btn');
  if (currentIndex === activeQuestions.length - 1) {
    nextBtn.textContent = 'Завершить';
  } else {
    nextBtn.textContent = answered[currentIndex] === null ? 'Пропустить →' : 'Следующий →';
  }
  updateProgress();
  updateStats();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(idx) {
  if (answered[currentIndex] !== null) return;
  const q = activeQuestions[currentIndex];
  answered[currentIndex] = idx;
  if (idx === q.correct) correctCount++;
  else wrongCount++;
  showAnswer(idx);
  updateStats();
  saveState();
  const nextBtn = document.getElementById('next-btn');
  if (currentIndex !== activeQuestions.length - 1) nextBtn.textContent = 'Следующий →';
}

function showAnswer(selectedIdx) {
  const q = activeQuestions[currentIndex];
  const buttons = document.querySelectorAll('.option');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === selectedIdx) btn.classList.add('wrong');
  });
  const feedback = document.getElementById('feedback');
  feedback.innerHTML = '';
  if (selectedIdx === q.correct) {
    feedback.className = 'feedback show correct';
    const strong = document.createElement('strong');
    strong.textContent = 'Верно! ';
    feedback.appendChild(strong);
    if (q.explanation) feedback.appendChild(document.createTextNode(q.explanation));
  } else {
    feedback.className = 'feedback show wrong';
    const strong = document.createElement('strong');
    strong.textContent = 'Неверно. ';
    feedback.appendChild(strong);
    feedback.appendChild(document.createTextNode('Правильный ответ: '));
    const correctLetter = document.createElement('strong');
    correctLetter.textContent = ['A', 'B', 'C', 'D'][q.correct];
    feedback.appendChild(correctLetter);
    if (q.explanation) feedback.appendChild(document.createTextNode('. ' + q.explanation));
  }
}

function nextQuestion() {
  if (isFinished) return;
  if (currentIndex < activeQuestions.length - 1) {
    currentIndex++;
    saveState();
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (isFinished) return;
  if (currentIndex > 0) {
    currentIndex--;
    saveState();
    renderQuestion();
  }
}

function finishEarly() {
  const skipped = answered.filter(a => a === null).length;
  if (skipped > 0) {
    if (!confirm('Пропущено вопросов: ' + skipped + '. Завершить тест?')) return;
  } else {
    if (!confirm('Завершить тест?')) return;
  }
  finishQuiz();
}

function finishQuiz() {
  if (isFinished) return;
  isFinished = true;
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('final-score').textContent = correctCount;
  const answeredCount = correctCount + wrongCount;
  const skipped = activeQuestions.length - answeredCount;
  const pct = answeredCount > 0 ? Math.round(correctCount / answeredCount * 100) : 0;
  document.getElementById('final-percent').textContent = pct;
  document.getElementById('final-total').textContent = activeQuestions.length;

  const skippedEl = document.getElementById('skipped-info');
  if (skippedEl) {
    skippedEl.textContent = skipped > 0 ? 'Пропущено: ' + skipped : '';
  }

  let msg = '';
  if (answeredCount === 0) msg = 'Ты вообще ничего не ответил, братан.';
  else if (pct >= 90) msg = 'Заебись, ты готов! Можно идти сдавать.';
  else if (pct >= 75) msg = 'Хорошо. Подтяни пару тем и будет огонь.';
  else if (pct >= 50) msg = 'Серединка на половинку. Прогони ещё разок.';
  else msg = 'Хуёво. Перечитай теорию и пройди тест ещё раз.';
  document.getElementById('result-message').textContent = msg;

  const reviewBtn = document.getElementById('review-btn');
  if (reviewBtn) reviewBtn.style.display = wrongCount > 0 ? '' : 'none';

  localStorage.removeItem(STORAGE_KEY);
  window.scrollTo({ top: 0 });
}

function getMistakes() {
  const out = [];
  activeQuestions.forEach((q, i) => {
    const ans = answered[i];
    if (ans !== null && ans !== q.correct) {
      out.push({ index: i, q, selected: ans });
    }
  });
  return out;
}

function showReview() {
  const mistakes = getMistakes();
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('review-screen').classList.remove('hidden');
  document.getElementById('review-summary').textContent =
    'Ошибок: ' + mistakes.length + ' из ' + activeQuestions.length + '. Проверь и пришли список на разбор.';

  const list = document.getElementById('review-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  mistakes.forEach(({ index, q, selected }) => {
    const card = document.createElement('div');
    card.className = 'review-card';

    const num = document.createElement('div');
    num.className = 'review-num';
    num.textContent = 'Вопрос #' + (index + 1);
    card.appendChild(num);

    const topic = document.createElement('div');
    topic.className = 'review-topic';
    topic.textContent = q.topic;
    card.appendChild(topic);

    const qText = document.createElement('div');
    qText.className = 'review-q';
    qText.textContent = q.question;
    card.appendChild(qText);

    if (q.code) {
      const code = document.createElement('div');
      code.className = 'review-code';
      code.textContent = q.code;
      card.appendChild(code);
    }

    const yourAns = document.createElement('div');
    yourAns.className = 'review-answer review-your';
    yourAns.innerHTML = '<strong>Твой ответ (' + letters[selected] + '):</strong> ' + escapeHtml(q.options[selected]);
    card.appendChild(yourAns);

    const rightAns = document.createElement('div');
    rightAns.className = 'review-answer review-right';
    rightAns.innerHTML = '<strong>Правильный (' + letters[q.correct] + '):</strong> ' + escapeHtml(q.options[q.correct]);
    card.appendChild(rightAns);

    if (q.explanation) {
      const expl = document.createElement('div');
      expl.className = 'review-expl';
      expl.textContent = q.explanation;
      card.appendChild(expl);
    }

    list.appendChild(card);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToResults() {
  document.getElementById('review-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  window.scrollTo({ top: 0 });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function copyMistakes() {
  const mistakes = getMistakes();
  const letters = ['A', 'B', 'C', 'D'];
  const lines = ['Ошибки в тесте СУБД (' + mistakes.length + ' из ' + activeQuestions.length + '):', ''];
  mistakes.forEach(({ index, q, selected }, i) => {
    lines.push((i + 1) + '. [' + q.topic + '] ' + q.question);
    if (q.code) lines.push('   Код: ' + q.code.replace(/\n/g, ' \\n '));
    lines.push('   Мой ответ: ' + letters[selected] + ') ' + q.options[selected]);
    lines.push('   Правильный: ' + letters[q.correct] + ') ' + q.options[q.correct]);
    if (q.explanation) lines.push('   Пояснение: ' + q.explanation);
    lines.push('');
  });
  const text = lines.join('\n');
  const btn = document.getElementById('copy-mistakes-btn');
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  };
  const done = () => {
    showToast('Скопировано! Пришли мне этот текст.');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Скопировано';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    }
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => { fallback(); done(); });
  } else {
    fallback();
    done();
  }
}

function showToast(msg) {
  const existing = document.querySelector('.copy-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function updateProgress() {
  const pct = ((currentIndex + 1) / activeQuestions.length) * 100;
  document.getElementById('progress').style.width = pct + '%';
}

function updateStats() {
  document.getElementById('correct-count').textContent = correctCount;
  document.getElementById('wrong-count').textContent = wrongCount;
}

document.addEventListener('keydown', (e) => {
  if (document.getElementById('quiz-screen').classList.contains('hidden')) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight') { e.preventDefault(); nextQuestion(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); prevQuestion(); }
  else if (['1','2','3','4'].includes(e.key)) { e.preventDefault(); selectAnswer(parseInt(e.key) - 1); }
  else {
    const map = {'a':0,'b':1,'c':2,'d':3,'A':0,'B':1,'C':2,'D':3,'ф':0,'и':1,'с':2,'в':3,'Ф':0,'И':1,'С':2,'В':3};
    if (e.key in map) { e.preventDefault(); selectAnswer(map[e.key]); }
  }
});
