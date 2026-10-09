:root {
  --bg-950: #090d1d;
  --bg-900: #121936;
  --bg-800: #1e244a;
  --card: rgba(18, 23, 46, 0.78);
  --card-soft: rgba(255, 255, 255, 0.05);
  --panel: rgba(14, 18, 37, 0.9);
  --text: #edf2ff;
  --text-soft: #d7dcf7;
  --muted: #a7afd4;
  --lavender: #b5a8ff;
  --violet: #8e7ef5;
  --pink: #ff9ecb;
  --cyan: #7fe7ff;
  --mint: #8be5c8;
  --shadow: rgba(9, 11, 23, 0.42);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(142, 126, 245, 0.28), transparent 30%),
    radial-gradient(circle at bottom right, rgba(127, 231, 255, 0.18), transparent 42%),
    linear-gradient(180deg, #0d1230 0%, #131c39 38%, #101935 100%);
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,0.75), transparent 100%),
    radial-gradient(2px 2px at 30% 70%, rgba(255,255,255,0.65), transparent 100%),
    radial-gradient(2px 2px at 80% 18%, rgba(255,255,255,0.65), transparent 100%),
    radial-gradient(2px 2px at 60% 65%, rgba(255,255,255,0.55), transparent 100%);
  opacity: 0.7;
  pointer-events: none;
}

button, input, select {
  font: inherit;
}

button {
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
}
button:hover { transform: translateY(-1px); }
button:active { transform: translateY(0); }

img { max-width: 100%; display: block; }

.hidden { display: none !important; }

#app { position: relative; }

.screen { min-height: 100vh; }
.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.hero-screen, .welcome-screen {
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  filter: blur(28px);
  opacity: 0.42;
  animation: floatOrb 12s ease-in-out infinite alternate;
}
.orb-one {
  left: 6%;
  top: 8%;
  background: rgba(142, 126, 245, 0.34);
}
.orb-two {
  right: 8%;
  bottom: 10%;
  background: rgba(127, 231, 255, 0.24);
  animation-delay: 0.9s;
}

@keyframes floatOrb {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(14px, -18px, 0) scale(1.08); }
}

.cloud {
  position: absolute;
  width: 180px;
  height: 65px;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  animation: drift 14s ease-in-out infinite alternate;
}
.cloud::before, .cloud::after {
  content: '';
  position: absolute;
  background: rgba(255,255,255,0.09);
  border-radius: 999px;
}
.cloud::before { width: 76px; height: 62px; left: 18px; top: -20px; }
.cloud::after { width: 92px; height: 68px; right: 20px; top: -22px; }
.cloud-one { left: 12%; top: 20%; }
.cloud-two { right: 10%; top: 30%; animation-delay: 1.2s; }
.cloud-three { left: 30%; bottom: 16%; animation-delay: 2.2s; }

@keyframes drift {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(18px, -20px, 0); }
}

.topbar {
  position: relative;
  z-index: 2;
  background: rgba(17, 22, 42, 0.38);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
}
.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
}
.brand-wrap {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.brand-mark {
  width: 34px;
  height: 34px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(142, 126, 245, 0.4);
}

.hero {
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 70px);
  display: grid;
  place-items: center;
  padding: 48px 0 0;
}
.hero-inner {
  text-align: center;
  display: grid;
  gap: 20px;
  justify-items: center;
}
.logo-panel {
  width: min(640px, 100%);
  padding: 28px 18px 20px;
  border-radius: 30px;
  background: rgba(16, 20, 40, 0.45);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 28px 80px rgba(9, 11, 23, 0.42);
}
.logo-panel img {
  width: min(360px, 60vw);
  margin: 0 auto;
}

.hero h1 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.3rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.07em;
  max-width: 820px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.primary-btn, .secondary-btn, .soft-btn, .tiny-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  font-weight: 700;
  letter-spacing: 0.01em;
}
.primary-btn {
  color: #fff;
  background: linear-gradient(135deg, var(--pink), var(--violet));
  box-shadow: 0 18px 30px rgba(142, 126, 245, 0.34);
}
.secondary-btn {
  color: var(--text);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
}
.soft-btn {
  color: var(--cyan);
  background: rgba(127, 231, 255, 0.12);
  border: 1px solid rgba(127, 231, 255, 0.25);
}
.tiny-btn {
  padding: 9px 12px;
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.06);
}

.form-shell {
  position: relative;
  z-index: 2;
  padding-bottom: 64px;
}
.form-panel {
  margin: 0 auto;
  width: min(760px, 100%);
  background: rgba(15, 20, 40, 0.7);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 28px;
  box-shadow: 0 30px 75px rgba(8, 9, 18, 0.46);
  padding: 24px;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 18px;
}
.field { display: grid; gap: 8px; }
.field.full { grid-column: 1 / -1; }
.field label {
  color: var(--text-soft);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.field input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  padding: 14px 16px;
  color: var(--text);
  outline: none;
}
.field input:focus {
  border-color: rgba(127, 231, 255, 0.72);
  box-shadow: 0 0 0 4px rgba(127, 231, 255, 0.12);
}
.action-row {
  display: flex;
  justify-content: flex-start;
}
.avatar-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0,1fr));
  gap: 12px;
}
.avatar-chip-option {
  width: 100%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  font-size: 2rem;
  user-select: none;
}
.avatar-chip-option.selected {
  background: linear-gradient(135deg, rgba(142,126,245,0.18), rgba(127,231,255,0.12));
  border-color: rgba(127,231,255,0.5);
  box-shadow: 0 0 0 4px rgba(127,231,255,0.12);
}
.form-notice {
  width: min(760px, 100%);
  margin: 16px auto 0;
  border-radius: 14px;
  padding: 12px 14px;
  background: rgba(255, 158, 203, 0.12);
  border: 1px solid rgba(255, 158, 203, 0.2);
  color: #ffdff0;
}

.room-screen {
  padding-bottom: 60px;
}
.room-header-bar {
  border-top: 1px solid rgba(255,255,255,0.04);
}
.room-topbar {
  min-height: 64px;
}
.room-badges {
  display: flex;
  align-items: center;
  gap: 10px;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);
  color: var(--text-soft);
  font-size: 0.75rem;
  font-weight: 600;
}
.pill.subtle { color: var(--cyan); }

.room-shell { padding-top: 28px; }
.room-heading-row {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
.eyebrow {
  margin: 0 0 4px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-size: 0.72rem;
}
.room-heading-row h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}
.code-card {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 220px;
  padding: 10px 14px;
  border-radius: 16px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}
.code-card span {
  color: var(--muted);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.code-card strong {
  font-size: 1.5rem;
  letter-spacing: 0.12em;
}

.main-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 20px;
}
.side-panel, .content-panel {
  background: rgba(15, 19, 38, 0.74);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 26px;
  box-shadow: 0 24px 60px rgba(8, 9, 18, 0.34);
}
.side-panel {
  padding: 18px 14px;
}
.nav-column {
  display: grid;
  gap: 10px;
}
.nav-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 12px 14px;
  background: rgba(255,255,255,0.04);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  font-weight: 600;
}
.nav-item.active {
  background: linear-gradient(135deg, rgba(142,126,245,0.18), rgba(127,231,255,0.14));
  border-color: rgba(127,231,255,0.28);
}
.content-panel {
  min-height: 700px;
  padding: 18px;
}
.tab-panel {
  display: none;
  min-height: 660px;
}
.tab-panel.active { display: block; }

.section-head,
.chat-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.section-head h3,
.chat-head h3,
.tab-panel h3 {
  margin: 0;
  font-size: 1.55rem;
  letter-spacing: -0.04em;
}

.chat-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 18px;
  min-height: 640px;
}
.chat-list {
  display: grid;
  gap: 12px;
  max-height: 470px;
  overflow-y: auto;
  padding-right: 6px;
}
.message-bubble {
  display: grid;
  grid-template-columns: 46px minmax(0,1fr);
  gap: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 18px;
  padding: 12px;
}
.message-bubble.self {
  background: linear-gradient(135deg, rgba(142,126,245,0.16), rgba(255,158,203,0.12));
  border-color: rgba(255,158,203,0.15);
}
.avatar-mini {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(142,126,245,0.22), rgba(127,231,255,0.18));
  font-size: 1.5rem;
}
.message-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}
.message-author {
  font-weight: 700;
}
.message-time {
  color: var(--muted);
  font-size: 0.7rem;
}
.message-text {
  color: var(--text-soft);
  line-height: 1.6;
  word-break: break-word;
}
.reactions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}
.reactions span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.04);
  border-radius: 999px;
  padding: 5px 8px;
}
.chat-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
}
.chat-form input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  color: var(--text);
  padding: 15px 16px;
}

.stack { display: grid; gap: 16px; }
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 18px;
}
.card h4 {
  margin: 0 0 10px;
  font-size: 1.1rem;
}
.card p {
  margin: 0;
  color: var(--text-soft);
}

.stat-list {
  display: grid;
  gap: 10px;
}
.stat-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-soft);
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.06);
  color: var(--text-soft);
  font-size: 0.72rem;
}
.member-list {
  display: grid;
  gap: 10px;
}
.member-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 12px;
}
.member-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.member-meta strong { display: block; }
.member-meta span { color: var(--muted); font-size: 0.75rem; }
.midnight-scene {
  position: relative;
  overflow: hidden;
  min-height: 300px;
  border-radius: 24px;
  background: linear-gradient(180deg, #111c38 0%, #1a1b42 36%, #f0cf8e 100%);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: inset 0 0 40px rgba(255,255,255,0.05);
}
.moon {
  position: absolute;
  top: 34px;
  right: 54px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff7d8, #f0d9a3 62%, #dfe7ff 100%);
  box-shadow: 0 0 30px rgba(255, 236, 182, 0.4);
  animation: moonFloat 7s ease-in-out infinite alternate;
}
.starfield {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(2px 2px, rgba(255,255,255,0.78), transparent 80%);
  background-size: 80px 80px;
  opacity: 0.8;
}
@keyframes moonFloat {
  0% { transform: translateY(0); }
  100% { transform: translateY(12px); }
}
.midnight-panel {
  position: relative;
  z-index: 1;
  margin-top: 150px;
  background: rgba(12,15,30,0.58);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 18px;
}
.empty-state {
  display: grid;
  place-items: center;
  min-height: 180px;
  text-align: center;
  color: var(--text-soft);
  border: 1px dashed rgba(255,255,255,0.12);
  border-radius: 18px;
  background: rgba(255,255,255,0.02);
}

@media (max-width: 900px) {
  .main-layout { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .form-grid { grid-template-columns: 1fr; }
  .avatar-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .chat-form { grid-template-columns: 1fr; }
  .hero-actions { width: 100%; }
  .hero-actions > * { flex: 1 1 100%; }
  .room-heading-row { flex-direction: column; align-items: start; }
  .code-card { width: 100%; justify-content: space-between; }
  .topbar-inner, .room-topbar { flex-direction: column; align-items: flex-start; gap: 10px; }
}

