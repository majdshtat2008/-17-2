function useFallback(imgEl, name){
  const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect width='100%' height='100%' fill='%23ffdfe8'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Montserrat, sans-serif' font-size='36' fill='%23333'>${name}</text></svg>`)
  imgEl.src = `data:image/svg+xml;utf8,${svg}`
}

const translations = {
  ar: {
    logo: 'مجد الدين & بيسان',
    tag: 'قصة صغيرة، حب كبير — منذ 17/2/2026',
    meet_label: 'تاريخ تعارفنا:',
    date: '17 فبراير 2026',
    subtitle: 'لنا عالمنا الخاص — لحظات، أغانٍ، وابتسامات',
    love_btn: 'رسالة حب مفاجئة ❤',
    playlist_h2: 'المغنين المفضلين',
    singer1: 'جدل', singer2: 'عمرو دياب', singer3: 'تامر عاشور', singer4: 'تامر حسني', singer5: 'رامي صبري', singer6: 'كايروكي',
    notes_h2: 'ذكريات صغيرة',
    love_message_default: 'اضغط على زر رسالة حب لتظهر رسالة رومانسية لطيفة!',
    footer: 'صُمم بحب من مجد إلى بيسان — رفيقة العمر'
  },
  en: {
    logo: 'Majd Al-Din & Bisan',
    tag: 'A small story, big love — since 17/2/2026',
    meet_label: 'Met on:',
    date: '17 Feb 2026',
    subtitle: 'Our own little world — moments, songs, and smiles',
    love_btn: 'Surprise love note ❤',
    playlist_h2: 'Favorite Artists',
    singer1: 'Jadal', singer2: 'Amr Diab', singer3: 'Tamer Ashour', singer4: 'Tamer Hosny', singer5: 'Rami Sabry', singer6: 'Cairokee',
    notes_h2: 'Little Memories',
    love_message_default: 'Press the love note button to show a sweet message!',
    footer: 'Made with love for Majd Al-Din & Bisan — made with love'
  }
};

// long-message translation keys
translations.ar.message_h2 = 'رسالتك الخاصة';
translations.ar.message_hint = 'اكتب رسالة طويلة لصديقتك هنا، يمكن حفظها محلياً أو تنزيلها كملف نصي.';
translations.ar.save_btn = 'حفظ';
translations.ar.clear_btn = 'مسح';
translations.ar.download_btn = 'تنزيل';
translations.ar.message_placeholder = 'اكتب رسالتك هنا...';
translations.ar.saved_notice = 'تم الحفظ محلياً';
translations.ar.message_default = 'حبيبتي بيسان،\n\nمنذ تلك اللحظة التي تقاطعت فيها نظراتنا في 17 فبراير، صار العالم بنظري أجمل وأدفأ. كل يوم معكِ هو بداية جديدة تكتب لنا حكاية من الحنان والضحك والآمال الصغيرة التي تكبر في القلب. أحبكِ بصدقٍ هادئ، ليس ككلماتٍ تمرّ، بل كنبضةٍ ثابتةٍ تذكرني دوماً بأن السعادة الحقيقية هي أن أشارككِ تفاصيل أيامي. أعدكِ أن أكون لكِ رفيق الطريق، أن أحتفل معكِ في الأفراح، وأواسيكِ في الأوقات الصعبة، وأن أحفظ لكِ كل لحظةٍ تشبهنا.\n\nحلاوة البدايات ستبقى نبراسنا، وذكرياتنا الصغيرة ستتحول إلى شجرٍ يثمر ألف وعد جميل. معكِ، تزدهر الأماني وتصبح الحياة موسيقى نستلذ بها. إلى مزيدٍ من الأيام التي نصنعها معاً، وإلى حبٍ ينمو بلا حدود.\n\nدائماً،\nمجد الدين';

translations.en.message_h2 = 'Your Special Message';
translations.en.message_hint = 'Write a long message here; you can save it locally or download it as a text file.';
translations.en.save_btn = 'Save';
translations.en.clear_btn = 'Clear';
translations.en.download_btn = 'Download';
translations.en.message_placeholder = 'Write your message here...';
translations.en.saved_notice = 'Saved locally';
translations.en.message_default = 'My dearest Bisan,\n\nSince the moment our eyes met on February 17, my world has grown warmer and more beautiful. Every day with you is a new beginning, a quiet story of tenderness, laughter, and growing hope. I love you with a steady, sincere heart — not as passing words, but as a constant feeling that reminds me happiness is in sharing life\'s small details with you. I promise to walk by your side, to celebrate your joys, comfort your sorrows, and treasure every moment that is uniquely ours.\n\nThe sweetness of our beginnings will always guide us, and our small memories will become a tree bearing countless gentle promises. With you, dreams blossom and life becomes a song we love. To more days we build together, and to a love that keeps deepening.\n\nAlways,\nMajd Al-Din';

function applyTranslations(lang){
  const map = translations[lang] || translations.ar;
  document.documentElement.lang = lang;
  document.getElementById('logo').textContent = map.logo;
  document.getElementById('tag').textContent = map.tag;
  document.querySelector('[data-i18n="meet_label"]').textContent = map.meet_label;
  document.getElementById('meet-date').textContent = map.date;
  document.getElementById('subtitle').textContent = map.subtitle;
  document.querySelector('[data-i18n="love_btn"]').textContent = map.love_btn;
  document.getElementById('playlist-h2').textContent = map.playlist_h2;
  document.getElementById('singer-1').textContent = map.singer1;
  document.getElementById('singer-2').textContent = map.singer2;
  document.getElementById('singer-3').textContent = map.singer3;
  document.getElementById('singer-4').textContent = map.singer4;
  document.getElementById('singer-5').textContent = map.singer5;
  document.getElementById('singer-6').textContent = map.singer6;
  document.getElementById('notes-h2').textContent = map.notes_h2;
  const loveMsg = document.getElementById('love-message');
  if(loveMsg && (loveMsg.dataset.userSet !== 'true')){
    loveMsg.textContent = map.love_message_default;
  }
  document.getElementById('footer-text').textContent = map.footer;
  // message section translations
  const mh = document.getElementById('message-h2'); if(mh) mh.textContent = map.message_h2;
  const hint = document.getElementById('message-hint'); if(hint) hint.textContent = map.message_hint;
  const saveBtn = document.getElementById('save-msg'); if(saveBtn) saveBtn.textContent = map.save_btn;
  const clearBtn = document.getElementById('clear-msg'); if(clearBtn) clearBtn.textContent = map.clear_btn;
  const dlBtn = document.getElementById('download-msg'); if(dlBtn) dlBtn.textContent = map.download_btn;
  const ta = document.getElementById('long-message'); if(ta && !ta.dataset.userSet){ ta.placeholder = map.message_placeholder }
  // toggle active class
  document.getElementById('lang-ar').classList.toggle('active', lang==='ar');
  document.getElementById('lang-en').classList.toggle('active', lang==='en');
}

function setLang(lang){
  localStorage.setItem('site-lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('site-lang') || 'ar';
  // setup language buttons
  const btnAr = document.getElementById('lang-ar');
  const btnEn = document.getElementById('lang-en');
  if(btnAr) btnAr.addEventListener('click', ()=>setLang('ar'));
  if(btnEn) btnEn.addEventListener('click', ()=>setLang('en'));

  applyTranslations(saved);

  // long message handling
  const ta = document.getElementById('long-message');
  const saveBtn = document.getElementById('save-msg');
  const clearBtn = document.getElementById('clear-msg');
  const dlBtn = document.getElementById('download-msg');
  const counter = document.getElementById('msg-counter');
  const savedNote = document.getElementById('saved-note');

  function loadLongMessage(){
    const content = localStorage.getItem('long-message');
    if(content && content.length){
      if(ta){ ta.value = content; ta.dataset.userSet = 'true'; }
      if(counter) counter.textContent = content.length;
    } else {
      // no saved content: prefill with default message in current language and auto-save so user finds it ready
      const lang = localStorage.getItem('site-lang') || 'ar';
      const defaultMsg = translations[lang].message_default || translations.ar.message_default;
      if(ta){ ta.value = defaultMsg; ta.dataset.userSet = 'true'; }
      if(counter) counter.textContent = (defaultMsg||'').length;
      localStorage.setItem('long-message', defaultMsg);
      const notice = translations[(localStorage.getItem('site-lang')||'ar')].saved_notice || 'Saved';
      if(savedNote) { savedNote.textContent = notice; setTimeout(()=>{ savedNote.textContent = '' }, 1600) }
    }
  }

  function saveLongMessage(){
    if(!ta) return;
    localStorage.setItem('long-message', ta.value);
    ta.dataset.userSet = 'true';
    const notice = translations[(localStorage.getItem('site-lang')||'ar')].saved_notice || 'Saved';
    if(savedNote) { savedNote.textContent = notice; setTimeout(()=>{ savedNote.textContent = '' }, 1800) }
  }

  function clearLongMessage(){
    if(!ta) return;
    ta.value = '';
    localStorage.removeItem('long-message');
    ta.dataset.userSet = 'true';
    if(counter) counter.textContent = '0';
  }

  function downloadLongMessage(){
    if(!ta) return;
    const blob = new Blob([ta.value], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'message_to_bisan.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }

  if(ta){ ta.addEventListener('input', ()=>{ if(counter) counter.textContent = ta.value.length; }); }
  if(saveBtn) saveBtn.addEventListener('click', saveLongMessage);
  if(clearBtn) clearBtn.addEventListener('click', clearLongMessage);
  if(dlBtn) dlBtn.addEventListener('click', downloadLongMessage);

  loadLongMessage();

  // --- Music player logic ---
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const progress = document.getElementById('progress');
  const vol = document.getElementById('volume');
  const trackList = Array.from(document.querySelectorAll('#track-list li'));
  let current = 0;

  function loadTrack(index){
    index = (index + trackList.length) % trackList.length;
    current = index;
    const src = trackList[current].dataset.src;
    audio.src = src;
    trackList.forEach((li,i)=> li.classList.toggle('playing', i===current));
  }

  function playPause(){
    if(audio.paused){ audio.play().catch(()=>{}); playBtn.textContent = '⏸'; }
    else { audio.pause(); playBtn.textContent = '▶︎'; }
  }

  playBtn && playBtn.addEventListener('click', playPause);
  prevBtn && prevBtn.addEventListener('click', ()=>{ loadTrack(current-1); audio.play().catch(()=>{}); playBtn.textContent='⏸' });
  nextBtn && nextBtn.addEventListener('click', ()=>{ loadTrack(current+1); audio.play().catch(()=>{}); playBtn.textContent='⏸' });

  trackList.forEach((li,idx)=> li.addEventListener('click', ()=>{ loadTrack(idx); audio.play().catch(()=>{}); playBtn.textContent='⏸' }));

  audio.addEventListener('timeupdate', ()=>{
    if(!audio.duration) return;
    progress.value = (audio.currentTime / audio.duration) * 100;
  });
  progress && progress.addEventListener('input', ()=>{
    if(!audio.duration) return; audio.currentTime = (progress.value/100) * audio.duration;
  });
  vol && vol.addEventListener('input', ()=>{ audio.volume = vol.value });

  audio.addEventListener('ended', ()=>{ loadTrack(current+1); audio.play().catch(()=>{}); });

  // initialize
  loadTrack(0);

  // --- YouTube helper ---
  const ytLinkInput = document.getElementById('yt-link');
  const ytLoadBtn = document.getElementById('yt-load');
  const ytPlayer = document.getElementById('yt-player');
  const searchBtns = Array.from(document.querySelectorAll('.search-artist'));

  function parseYouTubeId(url){
    if(!url) return null;
    try{
      const u = new URL(url);
      if(u.hostname.includes('youtu.be')) return u.pathname.slice(1);
      if(u.searchParams && u.searchParams.get('v')) return u.searchParams.get('v');
    }catch(e){
      // maybe just an id
      if(/^[a-zA-Z0-9_-]{10,}$/.test(url)) return url;
    }
    return null;
  }

  function loadYouTubeById(id){
    if(!id) return;
    ytPlayer.src = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1`;
  }

  ytLoadBtn && ytLoadBtn.addEventListener('click', ()=>{
    const id = parseYouTubeId(ytLinkInput.value.trim());
    if(id) loadYouTubeById(id);
    else alert('ضع رابط يوتيوب صحيح أو معرف الفيديو');
  });

  searchBtns.forEach(b=> b.addEventListener('click', ()=>{
    const q = encodeURIComponent(b.dataset.query);
    // open youtube search in new tab so user can pick a video quickly
    window.open(`https://www.youtube.com/results?search_query=${q}`,'_blank');
  }));

  // --- continuous hearts decoration ---
  const heartContainer = document.createElement('div');
  heartContainer.className = 'floating-heart-cont';
  document.body.appendChild(heartContainer);

  function spawnHeart(){
    const h = document.createElement('div');
    h.className = 'floating-heart';
    h.textContent = '❤';
    const x = Math.random()*100; const size = 12 + Math.random()*32;
    h.style.left = x + 'vw'; h.style.fontSize = size + 'px'; h.style.animationDuration = (6 + Math.random()*6) + 's';
    heartContainer.appendChild(h);
    setTimeout(()=>{ h.remove(); }, 14000);
  }

  // spawn a heart every 700ms
  setInterval(spawnHeart, 700);

  const btn = document.getElementById('love-btn');
  const msg = document.getElementById('love-message');

  const messages = [
    'كل يوم معك أحلى — أحبك! ❤',
    'أنتِ نغمة قلبي، وابتسامتكِ أحلى لحن.',
    'معاً نصنع لحظات لا تُنسى — إلى مزيد من الحب.'
  ];

  btn.addEventListener('click', ()=>{
    const m = messages[Math.floor(Math.random()*messages.length)];
    msg.textContent = m;
    msg.dataset.userSet = 'true';
    burstHearts();
  });
});

function burstHearts(){
  for(let i=0;i<10;i++){
    const h = document.createElement('div');
    h.className = 'floating-heart';
    h.textContent = '❤';
    h.style.left = (50 + (Math.random()-0.5)*30) + '%';
    h.style.bottom = (10 + Math.random()*20) + '%';
    h.style.fontSize = (12 + Math.random()*22) + 'px';
    h.style.opacity = '1';
    document.body.appendChild(h);
    setTimeout(()=>{ h.remove(); }, 1600);
  }
}
