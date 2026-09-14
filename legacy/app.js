/* ============================= DATA / CONSTANTS ============================= */
const COMMUNITIES = [
  {id:'breakups', icon:'heart', name:'Breakups'},
  {id:'loneliness', icon:'people', name:'Loneliness'},
  {id:'selfgrowth', icon:'sprout', name:'Self-growth'},
  {id:'family', icon:'home', name:'Family problems'},
  {id:'workstress', icon:'calendar', name:'School/Work stress'},
  {id:'relationships', icon:'heart', name:'Relationships'},
  {id:'mentalwellness', icon:'sparkle', name:'Mental wellness'},
  {id:'selflove', icon:'sparkle', name:'Self-love'},
];
const REACTIONS = [
  {id:'feel', icon:'heart', label:'I feel this'},
  {id:'hug', icon:'people', label:'Sending hugs'},
  {id:'proud', icon:'sprout', label:'Proud of you'},
  {id:'alone', icon:'heart', label:"You're not alone"},
  {id:'sparkle', icon:'sparkle', label:'This helped me'},
];
const MOODS = [
  {id:'happy', icon:'happy', label:'Happy', val:5},
  {id:'calm', icon:'calm', label:'Calm', val:4},
  {id:'okay', icon:'neutral', label:'Okay', val:3},
  {id:'sad', icon:'sad', label:'Sad', val:2},
  {id:'overwhelmed', icon:'storm', label:'Overwhelmed', val:1},
];
const AVATARS = [
  {id:'fern', label:'Fern'}, {id:'bloom', label:'Bloom'}, {id:'sprout', label:'Sprout'},
  {id:'moon', label:'Moon'}, {id:'sun', label:'Sun'}, {id:'bird', label:'Bird'},
  {id:'river', label:'River'}, {id:'star', label:'Star'}, {id:'cloud', label:'Cloud'}, {id:'stone', label:'Stone'}
];
const LEGACY_AVATARS = {'🌿':'fern','🌸':'bloom','🪴':'sprout','🌙':'moon','🌾':'sun','🕊️':'bird','🍃':'fern','🌊':'river','⭐':'star','🫧':'cloud','👤':'stone'};
const ICON_STYLE = 'outline';
const ICON_PATHS = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5M9 21v-6h6v6"/>',
  profile:'<circle cx="12" cy="8" r="3.5"/><path d="M5 21c.6-4 2.9-6 7-6s6.4 2 7 6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  comment:'<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9 9 0 0 1-4-.9L4 20l1.4-3.4A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/>',
  support:'<path d="M7 4h10v16H7z"/><path d="M9 7h6M9 10h6M9 13h3"/><path d="M5 8H3v8h2M19 8h2v8h-2"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z"/>',
  pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/>',
  heart:'<path d="M12 20S4 15.4 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20Z"/>',
  people:'<circle cx="9" cy="9" r="3"/><circle cx="16.5" cy="10" r="2.3"/><path d="M3.5 20c.4-3.5 2.2-5.2 5.5-5.2s5.1 1.7 5.5 5.2M14 15c3.7-.4 5.8 1.2 6.5 5"/>',
  sprout:'<path d="M12 21V11"/><path d="M12 12C7 12 5 9 5 5c4 0 7 2 7 7ZM12 10c0-4 2.2-7 7-7 0 4.5-2.5 7-7 7Z"/>',
  sparkle:'<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>',
  bookmark:'<path d="M6 4h12v17l-6-3.5L6 21V4Z"/>',
  repost:'<path d="M7 7h11l-2-2M17 17H6l2 2"/><path d="M18 7v4M6 17v-4"/>',
  bell:'<path d="M6 17h12l-1.5-2V10a4.5 4.5 0 0 0-9 0v5L6 17Z"/><path d="M10 20h4"/>',
  lock:'<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  flag:'<path d="M6 21V4"/><path d="M6 5c5-3 7 3 12 0v8c-5 3-7-3-12 0"/>',
  block:'<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>',
  mute:'<path d="M4 10v4h3l4 3V7l-4 3H4Z"/><path d="m16 10 4 4M20 10l-4 4"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  trash:'<path d="M5 7h14M10 4h4l1 3H9l1-3ZM7 7l1 14h8l1-14"/>',
  user:'<circle cx="12" cy="8" r="3"/><path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6"/>',
  happy:'<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M16 10h.01M8 14c1 1.5 2.3 2 4 2s3-.5 4-2"/>',
  calm:'<path d="M6 12c1.8-3 4-4.5 6-4.5s4.2 1.5 6 4.5c-1.8 3-4 4.5-6 4.5S7.8 15 6 12Z"/><path d="M12 9v6M9.5 12h5"/>',
  neutral:'<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M16 10h.01M8.5 15h7"/>',
  sad:'<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M16 10h.01M8 16c1-1.5 2.3-2 4-2s3 .5 4 2"/>',
  storm:'<path d="M7 16h9a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6 9.5 3.5 3.5 0 0 0 7 16Z"/><path d="m12 12-2 4h3l-1 4 4-6h-3l2-4"/>'
};
const LEGACY_ICONS = {'💔':'heart','🫂':'people','🌱':'sprout','🏠':'home','💼':'calendar','💕':'heart','🧠':'sparkle','✨':'sparkle','😊':'sparkle','😌':'sprout','😐':'clock','😔':'cloud','😭':'support','❤️':'heart','💗':'heart','💬':'comment','🔁':'repost','🔖':'bookmark','🚩':'flag','⛔':'block','🔇':'mute','🗑️':'trash','🔔':'bell','📖':'calendar','🌷':'sprout','💌':'mail','🔍':'search','👤':'profile','🏡':'home','🌍':'globe','🔒':'lock'};
function iconName(value){ return LEGACY_ICONS[value] || value || 'sparkle'; }
function icon(value, label='', variant=ICON_STYLE){
  const name = iconName(value);
  const path = ICON_PATHS[name] || ICON_PATHS.sparkle;
  const title = label ? ` aria-label="${label}"` : ' aria-hidden="true"';
  return `<svg class="icon icon-${variant} icon-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${title}>${variant==='circle'?`<circle class="icon-badge" cx="12" cy="12" r="11"/>`:''}<g>${path}</g></svg>`;
}
function avatarId(value){ return LEGACY_AVATARS[value] || value || 'fern'; }
function avatarMarkup(value, extra=''){
  const id = avatarId(value);
  const avatar = AVATARS.find(a=>a.id===id) || AVATARS[0];
  const avatarIcon = {fern:'sprout',bloom:'heart',sprout:'sprout',moon:'clock',sun:'sparkle',bird:'people',river:'globe',star:'sparkle',cloud:'cloud',stone:'block'}[avatar.id] || 'sprout';
  return `<span class="avatar-mark avatar-${avatar.id} ${extra}" role="img" aria-label="${avatar.label} avatar">${icon(avatarIcon, `${avatar.label} avatar`, 'circle')}</span>`;
}

/* ============================= STATE ============================= */
let ME = null;               // profile object
let posts = [];              // all shared posts (author-visible ones + own)
let view = 'home';
let feedTab = 'foryou';
let sortMode = 'recent';     // recent | trending
let activeCommunity = null;
let searchQuery = '';
let openPostId = null;       // which post has comments expanded
let letters = [];
let journalEntries = [];
let moodLog = [];
let journeyEntries = [];
let following = [];
let blocked = [];
let muted = [];
let savedIds = [];
let notifications = [];
let composerAnon = false;
const postLocks = new Set();
let authMode = 'signup';
let authBusy = false;
let csrfToken = null;

/* ============================= STORAGE HELPERS ============================= */
async function sget(key, shared=false){
  try{
    const response = await fetch(`/api/storage?key=${encodeURIComponent(key)}&shared=${shared}`);
    if(response.ok) return await response.json();
    if(response.status===401) return null;
    if(window.storage?.get){ const r = await window.storage.get(key, shared); return r ? JSON.parse(r.value) : null; }
    const value = localStorage.getItem(`rootwork:${shared?'shared':'private'}:${key}`);
    return value === null ? null : JSON.parse(value);
  }catch(e){ return null; }
}
async function sset(key, value, shared=false){
  try{
    const response = await fetch('/api/storage', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({key,value,shared})});
    if(response.ok) return true;
    if(response.status===401) return false;
    if(window.storage?.set){ await window.storage.set(key, JSON.stringify(value), shared); return true; }
    localStorage.setItem(`rootwork:${shared?'shared':'private'}:${key}`, JSON.stringify(value));
    return true;
  }catch(e){ console.error('storage set failed', e); return false; }
}
async function sdel(key, shared=false){
  try{
    const response = await fetch(`/api/storage?key=${encodeURIComponent(key)}&shared=${shared}`, {method:'DELETE'});
    if(response.ok) return;
    if(response.status===401) return;
    if(window.storage?.delete){ await window.storage.delete(key, shared); return; }
    localStorage.removeItem(`rootwork:${shared?'shared':'private'}:${key}`);
  }catch(e){}
}
async function slist(prefix, shared=false){
  try{
    const response = await fetch(`/api/storage?prefix=${encodeURIComponent(prefix)}&shared=${shared}`);
    if(response.ok){ const result = await response.json(); return result.keys || []; }
    if(response.status===401) return [];
    if(window.storage?.list){ const r = await window.storage.list(prefix, shared); return r ? r.keys : []; }
    const storagePrefix = `rootwork:${shared?'shared':'private'}:${prefix}`;
    return Object.keys(localStorage).filter(k=>k.startsWith(storagePrefix)).map(k=>k.slice(`rootwork:${shared?'shared':'private'}:`.length));
  }catch(e){ return []; }
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function timeAgo(ts){
  const diff = Math.floor((Date.now()-ts)/1000);
  if(diff<60) return 'just now';
  if(diff<3600) return Math.floor(diff/60)+'m ago';
  if(diff<86400) return Math.floor(diff/3600)+'h ago';
  if(diff<86400*30) return Math.floor(diff/86400)+'d ago';
  return new Date(ts).toLocaleDateString();
}
function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function toast(msg, isError=false){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.toggle('error', isError); t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ============================= INIT ============================= */
async function init(){
  ME = await sget('profile', false);
  if(ME){
    ME.privacy = {privateAccount:false, whoCanComment:'everyone', notifyOn:true, ...(ME.privacy||{})};
    ME.anonDefault = !!ME.anonDefault;
    ME.avatar = avatarId(ME.avatar);
  }
  await loadAll();
  composerAnon = !!ME?.anonDefault;
  render();
  if(!ME){ showOnboarding(); }
}
async function loadAll(){
  following = await sget('following', false) || [];
  blocked = await sget('blocked', false) || [];
  muted = await sget('muted', false) || [];
  savedIds = await sget('saved', false) || [];
  journalEntries = await sget('journal', false) || [];
  moodLog = await sget('moods', false) || [];
  journeyEntries = await sget('journey', false) || [];
  await loadPosts();
  await loadLetters();
  await buildNotifications();
}
async function loadPosts(){
  const keys = await slist('post:', true);
  const items = [];
  for(const k of keys){
    const v = await sget(k, true);
    if(v) items.push(v);
  }
  posts = items;
}
async function loadLetters(){
  const pubKeys = await slist('letter:', true);
  const privKeys = await slist('letter:', false);
  const items = [];
  for(const k of pubKeys){ const v = await sget(k, true); if(v) items.push(v); }
  for(const k of privKeys){ const v = await sget(k, false); if(v) items.push(v); }
  letters = items.sort((a,b)=>b.ts-a.ts);
}
async function notifyUser(userId, notification){
  if(!userId || userId===ME?.id) return;
  await sset(`notification:${userId}:${notification.id}`, notification, true);
}
async function buildNotifications(){
  if(!ME) { notifications = []; return; }
  const mine = posts.filter(p=>p.authorId===ME.id);
  const list = [];
  mine.forEach(p=>{
    (p.comments||[]).forEach(c=>{
      if(c.authorId!==ME.id && !muted.includes(c.authorId)) list.push({id:`comment:${p.id}:${c.id}`, icon:'comment', text:`${c.authorName} commented on your post`, ts:c.ts});
    });
    Object.entries(p.reactions||{}).forEach(([rid,arr])=>{
      (arr||[]).forEach(uidr=>{
        if(uidr!==ME.id && !muted.includes(uidr)) list.push({id:`reaction:${p.id}:${rid}:${uidr}`, icon:REACTIONS.find(r=>r.id===rid)?.icon||'heart', text:`Someone reacted to your post`, ts:p.ts});
      });
    });
    (p.reposters||[]).forEach(uidr=>{
      if(uidr!==ME.id && !muted.includes(uidr)) list.push({id:`repost:${p.id}:${uidr}`, icon:'repost', text:`Your post was reposted`, ts:p.ts});
    });
  });
  const eventKeys = await slist(`notification:${ME.id}:`, true);
  for(const key of eventKeys){ const event = await sget(key, true); if(event && !muted.includes(event.actorId)) list.push(event); }
  const unique = [...new Map(list.map(item=>[item.id || `${item.icon}:${item.text}:${item.ts}`, item])).values()];
  notifications = ME.privacy?.notifyOn === false ? [] : unique.sort((a,b)=>b.ts-a.ts).slice(0,30);
}

/* ============================= PROFILE / ONBOARDING ============================= */
function showOnboarding(){
  const el = document.createElement('div');
  el.className='overlay'; el.id='onboardModal';
  el.innerHTML = `
    <div class="modal">
      <div class="arrival-kicker"><span class="arrival-dot"></span> A softer place to land</div>
      <h2 class="serif">${authMode==='signup'?'Welcome to Rootwork':'Welcome back'}</h2>
      <p class="subtle">${authMode==='signup'?'Create your private space to feel, heal, and be heard.':'Sign in to return to your Rootwork space.'}</p>
      <div class="field"><label>Email</label><input type="email" id="ob-email" placeholder="you@example.com"></div>
      <div class="field"><label>Password</label><input type="password" id="ob-password" placeholder="At least 8 characters"></div>
      ${authMode==='signup'?`
        <div class="field"><label>Name or username</label><input type="text" id="ob-name" placeholder="e.g. Wren, or leave blank to stay anonymous"></div>
        <div class="field"><label>Pick an avatar</label><div class="avatar-grid" id="ob-avatars">
          ${AVATARS.map((a,i)=>`<button type="button" class="avatar-choice${i===0?' active':''}" data-av="${a.id}" aria-label="${a.label} avatar" onclick="pickAvatar(this)">${avatarMarkup(a.id)}</button>`).join('')}
        </div></div>
        <div class="field"><label>Short bio (optional)</label><textarea id="ob-bio" rows="2" placeholder="A sentence about where you are right now..."></textarea></div>
        <div class="field"><label style="display:flex;align-items:center;gap:8px;font-weight:400;"><input type="checkbox" id="ob-anon"> <span>Prefer to post anonymously by default</span></label></div>` : ''}
      <button class="btn" id="auth-submit" onclick="finishOnboarding()" ${authBusy?'disabled':''}>${authBusy?'Creating account...':(authMode==='signup'?'Create account':'Sign in')}</button>
      <button class="auth-switch" type="button" onclick="authMode=authMode==='signup'?'login':'signup';document.getElementById('onboardModal').remove();showOnboarding();">${authMode==='signup'?'Already have an account? Sign in':'Need an account? Create one'}</button>
    </div>`;
  document.body.appendChild(el);
}
function pickAvatar(btn){
  document.querySelectorAll('#ob-avatars .avatar-choice').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function setAuthBusy(value){
  authBusy = value;
  const button = document.getElementById('auth-submit');
  if(button){ button.disabled = value; button.textContent = value ? 'Creating account...' : (authMode==='signup'?'Create account':'Sign in'); }
}
function authErrorMessage(type){
  return {
    email_taken:'That email is already registered.',
    invalid_email:'Enter a valid email address.',
    weak_password:'Password must be at least 8 characters.',
    csrf_failed:'Your signup session expired. Refresh and try again.',
    rate_limited:'Too many signup attempts. Try again later.',
    invalid_avatar:'Choose a valid avatar.',
    database_unavailable:'Database connection failed. Check the Aiven TLS certificate and connection settings.',
    schema_out_of_date:'Database schema is out of date. Run migrations/002_signup_auth.sql in HeidiSQL.',
    server_error:'Unable to create your account right now.'
  }[type] || 'Unable to create your account right now.';
}
async function getCsrfToken(){
  if(csrfToken) return csrfToken;
  const response = await fetch('/api/auth/csrf');
  if(!response.ok) throw new Error('csrf_failed');
  csrfToken = (await response.json()).token;
  return csrfToken;
}
async function finishOnboarding(){
  if(authBusy) return;
  const email = document.getElementById('ob-email').value.trim();
  const password = document.getElementById('ob-password').value;
  if(authMode==='login') return loginAccount(email, password);
  const name = document.getElementById('ob-name').value.trim() || 'Anonymous Seedling';
  const bio = document.getElementById('ob-bio').value.trim();
  const anonDefault = document.getElementById('ob-anon').checked;
  const avatarId = document.querySelector('#ob-avatars .avatar-choice.active').dataset.av;
  setAuthBusy(true);
  try{
    const token = await getCsrfToken();
    const response = await fetch('/api/auth/signup', {method:'POST', headers:{'Content-Type':'application/json','x-csrf-token':token}, body:JSON.stringify({email,password,name, bio, avatarId, anonDefault})});
    const result = await response.json();
    if(!response.ok){ toast(authErrorMessage(result.error), true); if(result.error==='csrf_failed') csrfToken=null; return; }
    ME = {id:result.id, name:result.name, bio:result.bio, avatar:result.avatarId, anonDefault:result.anonDefault, privacy:{ privateAccount:false, whoCanComment:'everyone', notifyOn:true }};
    composerAnon = anonDefault;
    await sset('profile', ME, false);
    document.getElementById('onboardModal').remove();
    toast('Welcome — glad you\'re here');
    render();
  }catch(error){ toast(authErrorMessage(error.message), true); }
  finally{ setAuthBusy(false); }
}
async function loginAccount(email, password){
  const response = await fetch('/api/auth/login', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email,password})});
  const result = await response.json();
  if(!response.ok){ toast(result.error || 'Unable to sign in'); return; }
  ME = {id:result.id, name:result.name, bio:result.bio, avatar:result.avatarId, anonDefault:!!result.anonDefault, privacy:{privateAccount:!!result.privateAccount, whoCanComment:result.whoCanComment||'everyone', notifyOn:result.notifyOn!==false}};
  composerAnon = ME.anonDefault;
  await sset('profile', ME, false);
  document.getElementById('onboardModal').remove();
  await loadAll();
  render();
}

/* ============================= POSTS ============================= */
async function createPost(){
  const text = document.getElementById('composer-text').value.trim();
  if(!text){ toast('Write something first'); return; }
  const community = document.getElementById('composer-community').value;
  const mood = document.getElementById('composer-mood').value;
  const anon = composerAnon;
  const post = {
    id: uid(), authorId: ME.id, authorName: anon ? null : ME.name, authorAvatar: anon ? 'stone' : ME.avatar,
    anonymous: anon, text, community: community||null, mood: mood||null,
    ts: Date.now(), reactions:{}, comments:[], reposters:[], isRepost:false, originalId:null,
    authorPrivacy:{...ME.privacy}
  };
  await sset('post:'+post.id, post, true);
  document.getElementById('composer-text').value='';
  toast('Posted');
  await loadPosts(); await buildNotifications(); render();
}
async function reactToPost(postId, reactionId){
  if(postLocks.has(postId)) return;
  postLocks.add(postId);
  const p = posts.find(x=>x.id===postId); if(!p){ postLocks.delete(postId); return; }
  p.reactions = p.reactions || {};
  p.reactions[reactionId] = p.reactions[reactionId] || [];
  const i = p.reactions[reactionId].indexOf(ME.id);
  // remove any other reaction by me first (one reaction per user, like typical apps)
  Object.keys(p.reactions).forEach(rid=>{
    p.reactions[rid] = p.reactions[rid].filter(u=>u!==ME.id);
  });
  if(i===-1){ p.reactions[reactionId].push(ME.id); } // else it was toggled off above
  await sset('post:'+p.id, p, true);
  if(p.authorId!==ME.id) await notifyUser(p.authorId, {id:`reaction:${p.id}:${reactionId}:${ME.id}`, actorId:ME.id, icon:REACTIONS.find(r=>r.id===reactionId)?.icon||'heart', text:`${ME.name} reacted to your post`, ts:Date.now()});
  postLocks.delete(postId);
  await buildNotifications();
  render();
}
async function addComment(postId){
  if(postLocks.has(postId)) return;
  postLocks.add(postId);
  const input = document.getElementById('comment-input-'+postId);
  const text = input.value.trim();
  if(!text){ postLocks.delete(postId); return; }
  const p = posts.find(x=>x.id===postId); if(!p){ postLocks.delete(postId); return; }
  const privacy = p.authorPrivacy || {};
  if(p.authorId!==ME.id && (privacy.whoCanComment==='nobody' || (privacy.whoCanComment==='followers' && !following.includes(p.authorId)))){
    postLocks.delete(postId); toast('Comments are limited on this post'); return;
  }
  p.comments = p.comments || [];
  p.comments.push({id:uid(), authorId:ME.id, authorName:ME.name, text, ts:Date.now(), likes:[]});
  await sset('post:'+p.id, p, true);
  input.value='';
  if(p.authorId!==ME.id) await notifyUser(p.authorId, {id:`comment:${p.id}:${p.comments[p.comments.length-1].id}`, actorId:ME.id, icon:'comment', text:`${ME.name} commented on your post`, ts:Date.now()});
  await loadPosts(); await buildNotifications();
  openPostId = postId;
  postLocks.delete(postId);
  render();
  setTimeout(()=>document.getElementById('comment-input-'+postId)?.focus(), 0);
}
async function deleteComment(postId, commentId){
  const p = posts.find(x=>x.id===postId); if(!p) return;
  p.comments = (p.comments||[]).filter(c=>c.id!==commentId);
  await sset('post:'+p.id, p, true);
  openPostId = postId;
  await loadPosts(); await buildNotifications(); render();
}
async function likeComment(postId, commentId){
  const p = posts.find(x=>x.id===postId); if(!p) return;
  const c = (p.comments||[]).find(c=>c.id===commentId); if(!c) return;
  c.likes = c.likes||[];
  const i = c.likes.indexOf(ME.id);
  if(i===-1) c.likes.push(ME.id); else c.likes.splice(i,1);
  await sset('post:'+p.id, p, true);
  openPostId = postId;
  await buildNotifications(); render();
}
async function repost(postId){
  const original = posts.find(x=>x.id===postId); if(!original) return;
  const msg = prompt("Add your own message (optional):","");
  if(msg===null) return;
  const rp = {
    id: uid(), authorId: ME.id, authorName: ME.name, authorAvatar: ME.avatar,
    anonymous:false, text: msg||'', community:null, mood:null,
    ts: Date.now(), reactions:{}, comments:[], reposters:[],
    isRepost:true, originalId: original.id, originalSnapshot:{authorName:original.anonymous?'Anonymous':original.authorName, text:original.text}
  };
  original.reposters = original.reposters||[];
  if(!original.reposters.includes(ME.id)) original.reposters.push(ME.id);
  await sset('post:'+original.id, original, true);
  await sset('post:'+rp.id, rp, true);
  toast('Reposted to your profile');
  await notifyUser(original.authorId, {id:`repost:${original.id}:${ME.id}`, actorId:ME.id, icon:'repost', text:`${ME.name} reposted your post`, ts:Date.now()});
  await loadPosts(); await buildNotifications(); render();
}
async function toggleSave(postId){
  const i = savedIds.indexOf(postId);
  if(i===-1){ savedIds.push(postId); toast('Saved'); } else { savedIds.splice(i,1); toast('Removed from saved'); }
  await sset('saved', savedIds, false);
  render();
}
async function deletePost(postId){
  const post = posts.find(p=>p.id===postId);
  if(!post || post.authorId!==ME.id) return;
  await sdel('post:'+postId, true);
  savedIds = savedIds.filter(id=>id!==postId);
  await sset('saved', savedIds, false);
  await loadPosts();
  await buildNotifications();
  openPostId = null;
  render();
}
function myReaction(p){
  if(!p.reactions) return null;
  for(const rid of Object.keys(p.reactions)) if(p.reactions[rid].includes(ME.id)) return rid;
  return null;
}
function reactionCount(p){
  if(!p.reactions) return 0;
  return Object.values(p.reactions).reduce((s,arr)=>s+arr.length,0);
}
async function reportPost(postId){
  if(confirm("Report this post to moderators for review?")){
    toast('Thanks — our team will review this within 24 hours.');
  }
}
async function blockUser(authorId, authorName){
  if(!authorId) return;
  if(confirm(`Block ${authorName||'this user'}? You won't see their posts or comments anymore.`)){
    if(!blocked.includes(authorId)) blocked.push(authorId);
    await sset('blocked', blocked, false);
    toast('User blocked');
    render();
  }
}
async function muteUser(authorId, authorName){
  if(!authorId) return;
  if(!muted.includes(authorId)) muted.push(authorId);
  await sset('muted', muted, false);
  await buildNotifications();
  toast(`Muted ${authorName||'user'} — you can still see each other but won't be notified`);
  render();
}
async function toggleFollow(authorId, authorName){
  if(!authorId || authorId===ME.id) return;
  const i = following.indexOf(authorId);
  if(i===-1){
    following.push(authorId); toast(`Following ${authorName}`);
    await notifyUser(authorId, {id:`follow:${ME.id}:${authorId}`, actorId:ME.id, icon:'profile', text:`${ME.name} started following you`, ts:Date.now()});
  } else { following.splice(i,1); toast(`Unfollowed ${authorName}`);}
  await sset('following', following, false);
  await buildNotifications(); render();
}

/* ============================= FEED FILTER/SORT ============================= */
function visiblePosts(){
  let list = posts.filter(p => {
    if(blocked.includes(p.authorId)) return false;
    if(p.authorId!==ME.id && p.authorPrivacy?.privateAccount && !following.includes(p.authorId)) return false;
    return true;
  });
  if(activeCommunity) list = list.filter(p=>p.community===activeCommunity);
  if(searchQuery){
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      (p.text||'').toLowerCase().includes(q) ||
      (p.authorName||'').toLowerCase().includes(q) ||
      (p.community||'').toLowerCase().includes(q) ||
      (COMMUNITIES.find(c=>c.id===p.community)?.name||'').toLowerCase().includes(q)
    );
  }
  if(feedTab==='following') list = list.filter(p=>following.includes(p.authorId));
  if(feedTab==='foryou' && following.length){ list = list.filter(p=>p.authorId===ME.id || following.includes(p.authorId)); }
  if(feedTab==='recent') sortMode = 'recent';
  if(sortMode==='trending'){
    list = [...list].sort((a,b)=> (reactionCount(b)+((b.comments||[]).length*2)) - (reactionCount(a)+((a.comments||[]).length*2)));
  } else {
    list = [...list].sort((a,b)=>b.ts-a.ts);
  }
  return list;
}

/* ============================= JOURNAL ============================= */
async function addJournalEntry(){
  const text = document.getElementById('journal-text').value.trim();
  const mood = document.getElementById('journal-mood').value;
  if(!text){ toast('Write a little something first'); return; }
  journalEntries.unshift({id:uid(), text, mood, ts:Date.now()});
  await sset('journal', journalEntries, false);
  document.getElementById('journal-text').value='';
  toast('Saved to your journal');
  render();
}
async function deleteJournalEntry(id){
  journalEntries = journalEntries.filter(e=>e.id!==id);
  await sset('journal', journalEntries, false);
  render();
}

/* ============================= MOOD TRACKER ============================= */
async function logMood(moodId){
  const today = new Date().toISOString().slice(0,10);
  moodLog = moodLog.filter(m=>m.date!==today);
  moodLog.push({date:today, mood:moodId});
  await sset('moods', moodLog, false);
  toast('Mood logged for today');
  render();
}
function last7Days(){
  const days = [];
  for(let i=6;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const iso = d.toISOString().slice(0,10);
    const entry = moodLog.find(m=>m.date===iso);
    days.push({iso, label:d.toLocaleDateString(undefined,{weekday:'short'}).slice(0,2), mood:entry?entry.mood:null});
  }
  return days;
}

/* ============================= HEALING JOURNEY ============================= */
async function addJourneyEntry(){
  const text = document.getElementById('journey-text').value.trim();
  if(!text) return;
  const dayNum = journeyEntries.length ? Math.max(...journeyEntries.map(entry=>entry.day||0)) + 1 : 1;
  journeyEntries.push({id:uid(), day:dayNum, text, ts:Date.now()});
  await sset('journey', journeyEntries, false);
  document.getElementById('journey-text').value='';
  toast('Added to your healing journey');
  render();
}

/* ============================= LETTERS ============================= */
async function sendLetter(){
  const to = document.getElementById('letter-to').value.trim();
  const body = document.getElementById('letter-body').value.trim();
  const visibility = document.getElementById('letter-visibility').value; // private | anonymous | public
  if(!to || !body){ toast('Fill in both the recipient and the letter'); return; }
  const letter = {
    id: uid(), to, body, ts: Date.now(), visibility,
    authorId: ME.id, authorName: visibility==='anonymous' ? null : ME.name
  };
  const shared = visibility !== 'private';
  await sset('letter:'+letter.id, letter, shared);
  document.getElementById('letter-to').value='';
  document.getElementById('letter-body').value='';
  toast(visibility==='private' ? 'Saved privately' : 'Letter shared');
  await loadLetters(); render();
}
function visibleLetters(){
  return letters.filter(l => l.visibility==='public' || l.visibility==='anonymous' || l.authorId===ME.id);
}

/* ============================= SEARCH ============================= */
function doSearch(q){ searchQuery = q; view='home'; render(); }

/* ============================= RENDER: SHELL ============================= */
function render(){
  if(!ME){ document.getElementById('app').innerHTML=''; return; }
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderSidebar()}
    <div class="main">
      ${renderTopbar()}
      <div class="content">${renderView()}</div>
    </div>
    ${renderRightbar()}
    ${renderBottomNav()}
  `;
}
function navItem(id, iconNameArg, label, badge){
  return `<button class="navlink ${view===id?'active':''}" onclick="goView('${id}')"><span class="ic">${icon(iconNameArg, label)}</span>${label}${badge?`<span class="badge">${badge}</span>`:''}</button>`;
}
function goView(v){ view=v; searchQuery=''; render(); window.scrollTo(0,0); }
function renderSidebar(){
  return `
  <div class="sidebar">
    <div class="brand"><span class="mark">${icon('sprout','Rootwork')}</span><div><div class="name">Rootwork</div><div class="tag">grow through it</div></div></div>
    <nav class="mainnav">
      ${navItem('home','home','Home')}
      ${navItem('communities','globe','Communities')}
      ${navItem('journal','calendar','Journal & Mood')}
      ${navItem('journey','sprout','Healing Journey')}
      ${navItem('letters','mail','Letters')}
      ${navItem('notifications','bell','Notifications', notifications.length||'')}
      ${navItem('saved','bookmark','Saved')}
      ${navItem('profile','profile','Profile')}
      ${navItem('about','heart','About Rootwork')}
    </nav>
    <button class="crisis-link" onclick="goView('crisis')"><b>Need support now?</b>See crisis resources →</button>
  </div>`;
}
function renderBottomNav(){
  const items = [['home','home'],['communities','globe'],['journal','calendar'],['letters','mail'],['profile','profile']];
  return `<div class="bottomnav">${items.map(([id,ic])=>`<button class="${view===id?'active':''}" onclick="goView('${id}')">${icon(ic)}</button>`).join('')}</div>`;
}
function renderTopbar(){
  return `
  <div class="topbar">
    <div class="searchbox">
      <span>${icon('search')}</span>
      <input type="text" placeholder="Search people, posts, #hashtags, communities..." value="${escapeHtml(searchQuery)}"
        oninput="doSearch(this.value)">
    </div>
    <button class="avatar-btn" onclick="goView('profile')">${avatarMarkup(ME.avatar)}</button>
  </div>`;
}
function renderRightbar(){
  const days = last7Days();
  const todays = moodLog.find(m=>m.date===new Date().toISOString().slice(0,10));
  const trending = [...posts].filter(p=>{
    if(blocked.includes(p.authorId)) return false;
    return p.authorId===ME.id || !p.authorPrivacy?.privateAccount || following.includes(p.authorId);
  })
    .sort((a,b)=>(reactionCount(b)+((b.comments||[]).length*2)) - (reactionCount(a)+((a.comments||[]).length*2))).slice(0,3);
  return `
  <div class="rightbar">
    <div class="section-title" style="font-size:15px;">Your week</div>
    <div class="mood-history mood-history-chart">
      ${days.map(d=>{
        const m = MOODS.find(x=>x.id===d.mood);
        const h = m ? m.val*14+10 : 6;
        return `<div class="mood-bar"><div class="bar-track"><div class="stem${m?' has-mood':''}" style="height:${h}px;" title="${m?m.label:'no entry'}"></div></div><div class="lbl">${d.label}</div></div>`;
      }).join('')}
    </div>
    ${!todays ? `<button class="btn sm secondary" style="margin-top:12px;width:100%;" onclick="goView('journal')">Log today's mood</button>` : `<div class="subtle" style="margin-top:10px;">Today: ${icon(MOODS.find(m=>m.id===todays.mood)?.icon)} ${MOODS.find(m=>m.id===todays.mood)?.label}</div>`}
    <hr class="div">
    <div class="section-title" style="font-size:15px;">${icon('sparkle')} Trending</div>
    ${trending.length? trending.map(p=>`
      <div style="margin-bottom:12px; font-size:13px; cursor:pointer;" onclick="goView('home')">
        <div style="font-weight:700;">${p.anonymous?'Anonymous':escapeHtml(p.authorName||'')}</div>
        <div class="subtle" style="line-height:1.4;">${escapeHtml((p.text||'').slice(0,70))}${(p.text||'').length>70?'…':''}</div>
      </div>`).join('') : `<div class="subtle">Nothing trending yet.</div>`}
  </div>`;
}

/* ============================= RENDER: VIEWS ============================= */
function renderView(){
  switch(view){
    case 'home': return renderHome();
    case 'communities': return renderCommunities();
    case 'journal': return renderJournal();
    case 'journey': return renderJourney();
    case 'letters': return renderLetters();
    case 'notifications': return renderNotifications();
    case 'saved': return renderSaved();
    case 'profile': return renderProfile();
    case 'about': return renderAbout();
    case 'crisis': return renderCrisis();
    default: return renderHome();
  }
}

function renderComposer(){
  return `
  <div class="composer">
    <div style="display:flex; gap:10px;">
      <div class="post-avatar">${avatarMarkup(composerAnon?'stone':ME.avatar)}</div>
      <textarea id="composer-text" rows="3" placeholder="Today I feel... share a thought, a win, or ask for support"></textarea>
    </div>
    <div class="composer-row">
      <div class="toggle-row">
        <select id="composer-community"><option value="">No community</option>
          ${COMMUNITIES.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}
        </select>
        <select id="composer-mood"><option value="">Mood (optional)</option>
          ${MOODS.map(m=>`<option value="${m.id}">${m.label}</option>`).join('')}
        </select>
        <label><input type="checkbox" ${composerAnon?'checked':''} onchange="composerAnon=this.checked; render();"> Post anonymously</label>
      </div>
      <button class="btn" onclick="createPost()">Share</button>
    </div>
  </div>`;
}

function renderHome(){
  const list = visiblePosts();
  return `
    <div class="section-title">${searchQuery? `Results for "${escapeHtml(searchQuery)}"` : 'Home'}</div>
    ${!searchQuery ? `
    <div class="pillrow">
      <button class="pill ${feedTab==='foryou'?'active':''}" onclick="feedTab='foryou';render()">For You</button>
      <button class="pill ${feedTab==='following'?'active':''}" onclick="feedTab='following';render()">Following</button>
      <button class="pill ${feedTab==='recent'?'active':''}" onclick="feedTab='recent';render()">Recent</button>
      <span style="flex:1;"></span>
      <button class="pill ${sortMode==='trending'?'active':''}" onclick="sortMode = sortMode==='trending'?'recent':'trending'; render()">${icon('sparkle')} Most supported</button>
    </div>
    ${renderComposer()}
    ` : ''}
    ${activeCommunity ? `<div class="pillrow"><span class="pill active">${icon(COMMUNITIES.find(c=>c.id===activeCommunity)?.icon)} ${COMMUNITIES.find(c=>c.id===activeCommunity)?.name} <button class="icon-only" aria-label="Clear community" onclick="activeCommunity=null;render()">${icon('close','Clear')}</button></span></div>`:''}
    ${list.length ? list.map(renderPost).join('') : `<div class="empty"><div class="big">${icon('sprout')}</div>${feedTab==='following'?"You're not following anyone yet. Explore Communities to find people.":'No posts here yet — be the first to share.'}</div>`}
  `;
}

function renderPost(p){
  const mine = myReaction(p);
  const comm = COMMUNITIES.find(c=>c.id===p.community);
  const mood = MOODS.find(m=>m.id===p.mood);
  const isSaved = savedIds.includes(p.id);
  const isFollowing = following.includes(p.authorId);
  const showFollow = p.authorId!==ME.id && !p.anonymous;
  return `
  <div class="post">
    <div class="phead">
      <div class="pavatar">${avatarMarkup(p.anonymous?'stone':(p.authorAvatar||'fern'))}</div>
      <div>
        <div class="pname">${p.anonymous?'Anonymous':escapeHtml(p.authorName||'Someone')}</div>
        <div class="pmeta">${timeAgo(p.ts)}</div>
      </div>
      ${showFollow?`<button class="btn ghost sm" style="margin-left:auto;" onclick="toggleFollow('${p.authorId}','${escapeHtml(p.authorName||'')}')">${isFollowing?'Following':'Follow'}</button>`:''}
    </div>
    ${p.isRepost && p.originalSnapshot ? `<div class="repost-of">${icon('repost')} Reposted from ${escapeHtml(p.originalSnapshot.authorName||'someone')}: "${escapeHtml((p.originalSnapshot.text||'').slice(0,140))}"</div>`:''}
    ${(comm||mood)?`<div class="tag-row">${comm?`<span class="tag">${icon(comm.icon)} ${comm.name}</span>`:''}${mood?`<span class="tag mood">${icon(mood.icon)} ${mood.label}</span>`:''}</div>`:''}
    ${p.text?`<div class="ptext">${escapeHtml(p.text)}</div>`:''}
    <div class="reactions-row">
      ${REACTIONS.map(r=>{
        const count = (p.reactions&&p.reactions[r.id])?p.reactions[r.id].length:0;
        return `<button class="reactbtn ${mine===r.id?'mine':''}" onclick="reactToPost('${p.id}','${r.id}')" title="${r.label}">${icon(r.icon,r.label)}${count?` ${count}`:''}</button>`;
      }).join('')}
    </div>
    <div class="post-actions">
      <button onclick="openPostId = openPostId==='${p.id}'?null:'${p.id}'; render();">${icon('comment','Comments')} ${(p.comments||[]).filter(c=>!blocked.includes(c.authorId)).length} Comment${(p.comments||[]).filter(c=>!blocked.includes(c.authorId)).length===1?'':'s'}</button>
      <button onclick="repost('${p.id}')">${icon('repost','Repost')} Repost${(p.reposters||[]).length?` (${p.reposters.length})`:''}</button>
      <button class="${isSaved?'saved':''}" onclick="toggleSave('${p.id}')">${icon('bookmark',isSaved?'Saved':'Save')} ${isSaved?'Saved':'Save'}</button>
      ${p.authorId!==ME.id?`<button onclick="reportPost('${p.id}')">${icon('flag','Report')} Report</button>`:''}
      ${p.authorId!==ME.id?`<button onclick="blockUser('${p.authorId}','${escapeHtml(p.authorName||'')}')">${icon('block','Block')} Block</button>`:''}
      ${p.authorId!==ME.id?`<button onclick="muteUser('${p.authorId}','${escapeHtml(p.authorName||'')}')">${icon('mute','Mute')} Mute</button>`:''}
      ${p.authorId===ME.id?`<button onclick="if(confirm('Delete this post?')) deletePost('${p.id}')">${icon('trash','Delete')} Delete</button>`:''}
    </div>
    ${openPostId===p.id ? renderComments(p) : ''}
  </div>`;
}
function renderComments(p){
  const cs = (p.comments||[]).filter(c=>!blocked.includes(c.authorId));
  return `
  <div class="comments-block">
    ${cs.map(c=>`
      <div class="comment">
        <div class="chead"><span><b>${escapeHtml(c.authorName||'Someone')}</b> · ${timeAgo(c.ts)}</span></div>
        <div>${escapeHtml(c.text)}</div>
        <div class="cactions">
          <button onclick="likeComment('${p.id}','${c.id}')">${icon('heart','Like')} ${((c.likes||[]).length)||''} Like</button>
          ${c.authorId===ME.id?`<button onclick="deleteComment('${p.id}','${c.id}')">Delete</button>`:''}
        </div>
      </div>`).join('')}
    <div style="display:flex; gap:8px; margin-top:10px;">
      <input type="text" id="comment-input-${p.id}" placeholder="Write a supportive reply..." onkeydown="if(event.key==='Enter')addComment('${p.id}')">
      <button class="btn sm" onclick="addComment('${p.id}')">Send</button>
    </div>
  </div>`;
}

function renderCommunities(){
  return `
    <div class="section-title">Support Communities</div>
    <p class="subtle">Find people who understand exactly what you're going through.</p>
    <div class="comm-grid">
      ${COMMUNITIES.map(c=>{
        const count = posts.filter(p=>p.community===c.id).length;
        return `<div class="comm-card ${activeCommunity===c.id?'active':''}" onclick="activeCommunity='${c.id}'; view='home'; feedTab='foryou'; render();">
          <div class="cicon">${icon(c.icon,c.name)}</div><div class="cname">${c.name}</div><div class="ccount">${count} post${count===1?'':'s'}</div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function renderJournal(){
  const days = last7Days();
  const todays = moodLog.find(m=>m.date===new Date().toISOString().slice(0,10));
  return `
    <div class="section-title">Mood Tracker</div>
    <p class="subtle">How are you today? This is just for you.</p>
    <div class="mood-row">
      ${MOODS.map(m=>`<div class="mood-opt ${todays&&todays.mood===m.id?'selected':''}" onclick="logMood('${m.id}')"><span class="em">${icon(m.icon,m.label)}</span>${m.label}</div>`).join('')}
    </div>
    <div class="mood-history mood-history-chart">
      ${days.map(d=>{
        const m = MOODS.find(x=>x.id===d.mood);
        const h = m ? m.val*16+12 : 8;
        return `<div class="mood-bar"><div class="bar-track"><div class="stem${m?' has-mood':''}" style="height:${h}px;" title="${m?m.label:'no entry'}"></div></div><div class="lbl">${d.label}${m?` ${icon(m.icon,m.label)}`:''}</div></div>`;
      }).join('')}
    </div>
    <hr class="div">
    <div class="section-title">Healing Journal</div>
    <p class="subtle">Private by default. Only you can see these entries.</p>
    <div class="composer">
      <textarea id="journal-text" rows="4" placeholder="Write freely — no one else will read this..."></textarea>
      <div class="composer-row">
        <select id="journal-mood"><option value="">Mood (optional)</option>${MOODS.map(m=>`<option value="${m.id}">${m.label}</option>`).join('')}</select>
        <button class="btn" onclick="addJournalEntry()">Save entry</button>
      </div>
    </div>
    <input type="text" placeholder="Search your past entries..." style="margin-bottom:14px;" oninput="filterJournal(this.value)">
    <div id="journal-list">${renderJournalList(journalEntries)}</div>
  `;
}
function renderJournalList(list){
  if(!list.length) return `<div class="empty"><div class="big">${icon('calendar')}</div>No journal entries yet.</div>`;
  return list.map(e=>{
    const m = MOODS.find(x=>x.id===e.mood);
    return `<div class="journal-entry">
      <div class="jhead"><span>${new Date(e.ts).toLocaleString()} ${m?`· ${icon(m.icon)} ${m.label}`:''}</span>
      <button style="background:none;border:none;color:var(--ink-soft);cursor:pointer;" onclick="deleteJournalEntry('${e.id}')">${icon('trash','Delete')}</button></div>
      <div>${escapeHtml(e.text)}</div>
    </div>`;
  }).join('');
}
function filterJournal(q){
  q = q.toLowerCase();
  const filtered = journalEntries.filter(e=>e.text.toLowerCase().includes(q));
  document.getElementById('journal-list').innerHTML = renderJournalList(filtered);
}

function renderJourney(){
  return `
    <div class="section-title">Your Healing Journey</div>
    <p class="subtle">Track how far you've come, one entry at a time. Others can support you here.</p>
    <div class="composer">
      <textarea id="journey-text" rows="2" placeholder="e.g. I'm slowly learning to accept what happened."></textarea>
      <div class="composer-row"><span></span><button class="btn" onclick="addJourneyEntry()">Add to timeline</button></div>
    </div>
    ${journeyEntries.length ? `<div class="timeline">
      ${[...journeyEntries].sort((a,b)=>(a.day||0)-(b.day||0)).map(e=>`<div class="tl-item"><div class="tlday">Day ${e.day}</div><div class="tltext">${escapeHtml(e.text)}</div></div>`).join('')}
    </div>` : `<div class="empty"><div class="big">${icon('sprout')}</div>Your timeline starts with a single entry.</div>`}
  `;
}

function renderLetters(){
  const list = visibleLetters();
  return `
    <div class="section-title">Letters I Never Sent</div>
    <p class="subtle">Say what you need to say — to someone, or to yourself. It never has to be sent.</p>
    <div class="composer">
      <div class="field"><label>To</label><input type="text" id="letter-to" placeholder="e.g. To the person who broke my heart..."></div>
      <div class="field"><label>Your letter</label><textarea id="letter-body" rows="5" placeholder="Write everything you need to say..."></textarea></div>
      <div class="composer-row">
        <select id="letter-visibility">
          <option value="private">Private (only me)</option>
          <option value="anonymous">Share anonymously</option>
          <option value="public">Share publicly</option>
        </select>
        <button class="btn rose" onclick="sendLetter()">Save letter</button>
      </div>
    </div>
    ${list.length? list.map(l=>`
      <div class="letter">
        <div class="lto">To: ${escapeHtml(l.to)}</div>
        <div class="lbody">${escapeHtml(l.body)}</div>
        <div class="lmeta">${l.visibility==='private'?`${icon('lock')} Only visible to you`:(l.visibility==='anonymous'?`${icon('profile')} Shared anonymously`:`${icon('globe')} ${escapeHtml(l.authorName||'Someone')}`)} · ${timeAgo(l.ts)}</div>
      </div>`).join('') : `<div class="empty"><div class="big">${icon('mail')}</div>No letters yet.</div>`}
  `;
}

function renderNotifications(){
  return `
    <div class="section-title">Notifications</div>
    ${notifications.length? notifications.map(n=>`
      <div class="notif"><span class="nic">${icon(n.icon)}</span><div><div>${escapeHtml(n.text)}</div><div class="ntime">${timeAgo(n.ts)}</div></div></div>
    `).join('') : `<div class="empty"><div class="big">${icon('bell')}</div>Nothing yet — notifications about comments, reactions, follows, and reposts will show up here.</div>`}
  `;
}

function renderSaved(){
  const list = posts.filter(p=>savedIds.includes(p.id));
  return `<div class="section-title">Saved Posts</div>${list.length? list.map(renderPost).join('') : `<div class="empty"><div class="big">${icon('bookmark')}</div>Posts you save will appear here.</div>`}`;
}

function renderProfile(){
  const myPosts = posts.filter(p=>p.authorId===ME.id);
  return `
    <div class="section-title">Your Profile</div>
    <div class="post" style="display:flex; gap:16px; align-items:center;">
      <div class="pavatar profile-avatar">${avatarMarkup(ME.avatar)}</div>
      <div style="flex:1;">
        <div style="font-weight:700; font-size:17px;">${escapeHtml(ME.name)}</div>
        <div class="subtle">${escapeHtml(ME.bio||'No bio yet.')}</div>
      </div>
      <button class="btn secondary sm" onclick="editProfile()">Edit</button>
    </div>

    <hr class="div">
    <div class="section-title" style="font-size:16px;">Privacy & Safety Settings</div>
    <div class="privacy-row">
      <div><b>Private account</b><div class="subtle">Only followers can see your posts</div></div>
      <label class="switch"><input type="checkbox" ${ME.privacy.privateAccount?'checked':''} onchange="updatePrivacy('privateAccount', this.checked)"><span class="slider"></span></label>
    </div>
    <div class="privacy-row">
      <div><b>Post anonymously by default</b><div class="subtle">New posts start as Anonymous</div></div>
      <label class="switch"><input type="checkbox" ${ME.anonDefault?'checked':''} onchange="updateDefaultAnon(this.checked)"><span class="slider"></span></label>
    </div>
    <div class="privacy-row">
      <div><b>Who can comment</b><div class="subtle">Control replies on your posts</div></div>
      <select onchange="updatePrivacy('whoCanComment', this.value)">
        <option value="everyone" ${ME.privacy.whoCanComment==='everyone'?'selected':''}>Everyone</option>
        <option value="followers" ${ME.privacy.whoCanComment==='followers'?'selected':''}>Followers only</option>
        <option value="nobody" ${ME.privacy.whoCanComment==='nobody'?'selected':''}>No one</option>
      </select>
    </div>
    <div class="privacy-row">
      <div><b>Notifications</b><div class="subtle">Comments, reactions, follows, reposts</div></div>
      <label class="switch"><input type="checkbox" ${ME.privacy.notifyOn?'checked':''} onchange="updatePrivacy('notifyOn', this.checked)"><span class="slider"></span></label>
    </div>

    <hr class="div">
    <div class="section-title" style="font-size:16px;">Blocked & Muted</div>
    <p class="subtle">${blocked.length} blocked · ${muted.length} muted</p>

    <hr class="div">
    <div class="section-title" style="font-size:16px;">Your posts</div>
    ${myPosts.length? myPosts.sort((a,b)=>b.ts-a.ts).map(renderPost).join('') : `<div class="empty">You haven't posted yet.</div>`}
  `;
}
async function updatePrivacy(key, value){
  ME.privacy[key] = value;
  await sset('profile', ME, false);
  for(const post of posts){
    if(post.authorId===ME.id){
      post.authorPrivacy = {...ME.privacy};
      await sset('post:'+post.id, post, true);
    }
  }
  render();
}
async function updateDefaultAnon(value){
  ME.anonDefault = value; composerAnon = value;
  await sset('profile', ME, false);
  render();
}
function editProfile(){
  const el = document.createElement('div');
  el.className='overlay'; el.id='editModal';
  el.innerHTML = `
    <div class="modal">
      <button class="modal-close" aria-label="Close" onclick="document.getElementById('editModal').remove()">${icon('close','Close')}</button>
      <h2 class="serif">Edit profile</h2>
      <div class="field"><label>Name</label><input type="text" id="ed-name" value="${escapeHtml(ME.name)}"></div>
      <div class="field"><label>Bio</label><textarea id="ed-bio" rows="3">${escapeHtml(ME.bio||'')}</textarea></div>
      <div class="field"><label>Avatar</label><div class="avatar-grid" id="edit-avatars">${AVATARS.map(a=>`<button type="button" class="avatar-choice ${avatarId(ME.avatar)===a.id?'active':''}" onclick="document.querySelectorAll('#editModal .avatar-choice').forEach(b=>b.classList.remove('active'));this.classList.add('active');" data-av="${a.id}">${avatarMarkup(a.id)}</button>`).join('')}</div></div>
      <button class="btn" onclick="saveProfileEdit()">Save changes</button>
    </div>`;
  document.body.appendChild(el);
}
async function saveProfileEdit(){
  const previousName = ME.name;
  ME.name = document.getElementById('ed-name').value.trim() || ME.name;
  ME.bio = document.getElementById('ed-bio').value.trim();
  const activeAv = document.querySelector('#editModal .avatar-choice.active');
  if(activeAv) ME.avatar = activeAv.dataset.av;
  await sset('profile', ME, false);
  for(const post of posts){
    let changed = false;
    if(post.authorId===ME.id && !post.anonymous){ post.authorName = ME.name; post.authorAvatar = ME.avatar; changed = true; }
    (post.comments||[]).forEach(comment=>{
      if(comment.authorId===ME.id){ comment.authorName = ME.name; changed = true; }
    });
    if(post.originalSnapshot?.authorName===previousName && post.originalId && post.authorId===ME.id){
      post.originalSnapshot.authorName = ME.name; changed = true;
    }
    if(changed) await sset('post:'+post.id, post, true);
  }
  letters = letters.map(letter=>letter.authorId===ME.id && letter.visibility==='public' ? {...letter, authorName:ME.name} : letter);
  for(const letter of letters){
    if(letter.authorId===ME.id && letter.visibility==='public') await sset('letter:'+letter.id, letter, true);
  }
  document.getElementById('editModal').remove();
  toast('Profile updated');
  render();
}

function renderCrisis(){
  return `
    <div class="section-title">Crisis & Safety Resources</div>
    <p class="subtle">If you are in immediate danger, please contact local emergency services right away.</p>
    <div class="post">
      <div class="pname">🇵🇭 Philippines</div>
      <p><b>National Center for Mental Health (NCMH) Crisis Hotline</b> — 24/7, free and confidential</p>
      <p>Landline: <b>1553</b> or <b>1800-1888-1553</b> (toll-free nationwide)<br>
      Globe/TM: <b>0917-899-8727</b> or <b>0966-351-4518</b><br>
      Smart/TNT: <b>0919-057-1553</b><br>
      In immediate danger: call <b>911</b> or go to the nearest emergency room</p>
    </div>
    <div class="post">
      <div class="pname">${icon('globe')} International</div>
      <p>Find a helpline in your country via the International Association for Suicide Prevention: befrienders.org or findahelpline.com</p>
    </div>
    <div class="post">
      <div class="pname">${icon('support')} Ongoing support</div>
      <p>If you're struggling regularly, consider reaching out to a licensed therapist or counselor. Rootwork is a peer community, not a substitute for professional care.</p>
    </div>
    <div class="post">
      <div class="pname">📜 Community Guidelines</div>
      <p>Be kind. No harassment, hate speech, or shaming. No sharing others' private info. No graphic self-harm content — talk about struggles honestly, but avoid detailed methods. Report anything that concerns you — moderators review every report.</p>
    </div>
  `;
}

function renderAbout(){
  return `
    <div class="section-title">Why I Made Rootwork</div>
    <div class="post about-card">
      <p>I built Rootwork out of my own healing. I went through a relationship that left me deeply traumatized — the pain of what he put me through changed me in ways I’m still working through.</p>
      <p>I made this space because I needed somewhere to feel what I was feeling without judgment, and I couldn’t find one that felt safe enough. If you’re here because you’re going through something similar, I see you, and you’re not alone.</p>
      <p>This app is my way of turning that pain into something that might help someone else.</p>
    </div>
  `;
}

init();
async function refreshSharedState(){
  if(!ME) return;
  await loadPosts();
  await loadLetters();
  await buildNotifications();
  render();
}
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible') refreshSharedState();
});
window.addEventListener('storage', event=>{
  if(event.key?.startsWith('rootwork:shared:')) refreshSharedState();
});
