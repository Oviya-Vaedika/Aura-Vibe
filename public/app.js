:root {
  --bg-950: #090d1d;
  --bg-900: #121936;
  --bg-800: #1d2548;
  --panel: rgba(17, 21, 46, 0.72);
  --panel-soft: rgba(255, 255, 255, 0.08);
  --violet-500: #8f7ef5;
  --violet-400: #a395ff;
  --pink-400: #ff9ecb;
  --cyan-400: #7fe7ff;
  --lavender: #d7d2ff;
  --text: #eff3ff;
  --text-soft: #d7d8ea;
  --muted: #adb7d6;
  --success: #7ce4bc;
  --warning: #ffd89b;
  --shadow: rgba(10, 15, 29, 0.34);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(143, 126, 245, 0.28), transparent 30%),
    radial-gradient(circle at bottom right, rgba(127, 231, 255, 0.18), transparent 30%),
    linear-gradient(180deg, #11162d 0%, #1a1d3d 32%, #101b35 100%);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.75), transparent 100%),
    radial-gradient(2px 2px at 75% 25%, rgba(255,255,255,0.75), transparent 100%),
    radial-gradient(2px 2px at 50% 70%, rgba(255,255,255,0.75), transparent 100%);
  opacity: 0.45;
  pointer-events: none;
}

img {
  max-width: 100%;
  display: block;
}

button, input, select, textarea {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

.hidden {
  display: none !important;
}

.screen {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(18, 25, 52, 0.5);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text);
  text-transform: uppercase;
  font-size: 0.8rem;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(143, 126, 245, 0.4);
}

.brand-mark img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 60px 0 80px;
}

.hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 28px;
  justify-items: center;
  text-align: center;
}

.logo-panel {
  width: min(640px, 100%);
  padding: 28px 18px 22px;
  background: rgba(17, 21, 46, 0.45);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 30px;
  box-shadow: 0 28px 90px rgba(7, 10, 20, 0.45);
}

.logo-panel img {
  width: clamp(180px, 30vw, 440px);
  margin: 0 auto;
}

.hero h1 {
  font-family: "Space Grotesk", "Inter", sans-serif;
  font-size: clamp(2.4rem, 5vw, 5rem);
  letter-spacing: -0.06em;
  margin: 0;
  line-height: 0.92;
}

.tagline {
  color: var(--text-soft);
  font-size: clamp(1rem, 2vw, 1.3rem);
  max-width: 620px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.primary-btn, .secondary-btn, .soft-btn, .tiny-btn {
  border-radius: 18px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 22px;
  letter-spacing: 0.01em;
}

.primary-btn {
  background: linear-gradient(135deg, var(--pink-400), var(--violet-500));
  color: white;
  box-shadow: 0 20px 35px rgba(143, 126, 245, 0.35);
}

.secondary-btn {
  background: rgba(255,255,255,0.07);
  color: white;
  border: 1px solid rgba(255,255,255,0.08);
}

.soft-btn {
  background: rgba(127, 231, 255, 0.12);
  color: var(--cyan-400);
  border: 1px solid rgba(127, 231, 255, 0.24);
}

.tiny-btn {
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  color: var(--text);
  min-width: 42px;
}

.hero-orb {
  position: absolute;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0.42;
  animation: floatOrb 11s ease-in-out infinite alternate;
}

.orb-one {
  background: rgba(143, 126, 245, 0.36);
  left: 10%;
  top: 12%;
}

.orb-two {
  background: rgba(127, 231, 255, 0.3);
  right: 10%;
  bottom: 12%;
  animation-delay: 1.4s;
}

@keyframes floatOrb {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-18px) scale(1.05); }
}

@keyframes drift {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  100% { transform: translate3d(16px, -20px, 0) rotate(8deg); }
}

.cloud {
  position: absolute;
  width: 180px;
  height: 58px;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  box-shadow: inset 0 0 20px rgba(255,255,255,0.06);
  animation: drift 12s ease-in-out infinite alternate;
}

.cloud::before, .cloud::after {
  content: "";
  position: absolute;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
}

.cloud::before {
  width: 84px;
  height: 64px;
  left: 24px;
  top: -22px;
}

.cloud::after {
  width: 108px;
  height: 70px;
  right: 20px;
  top: -26px;
}

.cloud.one { left: 10%; top: 20%; }
.cloud.two { right: 10%; top: 30%; animation-delay: 1.2s; }
.cloud.three { left: 24%; bottom: 16%; animation-delay: 2s; }

.form-shell {
  position: relative;
  z-index: 2;
  margin-top: 16px;
  display: grid;
  gap: 18px;
  width: min(760px, 100%);
}

.form-panel {
  background: linear-gradient(180deg, rgba(17, 21, 46, 0.9), rgba(25, 31, 60, 0.8));
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 30px 70px rgba(6, 9, 22, 0.45);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
}

.field.full { grid-column: 1 / -1; }

.field label {
  color: var(--text-soft);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.field input, .field select, .field textarea {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--text);
  border-radius: 14px;
  padding: 14px 15px;
  outline: none;
}

.field input:focus, .field select:focus, .field textarea:focus {
  border-color: rgba(127, 231, 255, 0.7);
  box-shadow: 0 0 0 4px rgba(127, 231, 255, 0.12);
}

.avatar-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-top: 10px;
}

.avatar-option {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
}

.avatar-option.selected {
  border-color: rgba(127, 231, 255, 0.8);
  box-shadow: 0 0 0 4px rgba(127, 231, 255, 0.14);
  background: linear-gradient(135deg, rgba(143,126,245,0.18), rgba(127,231,255,0.12));
}

.room-shell {
  padding: 24px 0 70px;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.room-header h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.04em;
}

.room-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 8px 12px;
  border-radius: 999px;
  color: var(--text-soft);
  font-size: 0.8rem;
}

.main-grid {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 20px;
}

.side-panel,
.content-panel {
  background: rgba(12, 17, 35, 0.7);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 26px;
  box-shadow: 0 24px 53px rgba(6, 10, 20, 0.22);
}

.side-panel {
  padding: 18px;
}

.nav-list {
  display: grid;
  gap: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  justify-content: flex-start;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  color: var(--text);
  border-radius: 14px;
  padding: 12px 14px;
  font-weight: 600;
}

.nav-item.active {
  background: linear-gradient(135deg, rgba(143,126,245,0.2), rgba(127,231,255,0.14));
  border-color: rgba(127,231,255,0.25);
}

.content-panel {
  padding: 18px;
  min-height: 760px;
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}

.chat-panel {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 18px;
  min-height: 720px;
}

.chat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.chat-list {
  display: grid;
  gap: 12px;
  max-height: 470px;
  overflow-y: auto;
  padding-right: 4px;
}

.message-bubble {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 18px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
}

.message-bubble.self {
  background: linear-gradient(135deg, rgba(143,126,245,0.16), rgba(255,157,203,0.12));
  border-color: rgba(255,157,203,0.18);
}

.avatar-chip {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(143,126,245,0.2), rgba(127,231,255,0.2));
  font-size: 1.5rem;
}

.message-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
}

.message-name {
  font-weight: 700;
}

.message-time {
  color: var(--muted);
  font-size: 0.72rem;
}

.message-text {
  color: var(--text-soft);
  line-height: 1.6;
}

.reactions {
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.reaction {
  border-radius: 999px;
  padding: 5px 8px;
  background: rgba(255,255,255,0.05);
  color: var(--muted);
  font-size: 0.76rem;
  border: 1px solid rgba(255,255,255,0.06);
}

.chat-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
}

.chat-form input {
  width: 100%;
  padding: 15px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  color: var(--text);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.info-card {
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.07);
}

.info-card h3,
.info-card h4 {
  margin: 0 0 10px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  color: var(--text-soft);
}

.result-box {
  background: linear-gradient(135deg, rgba(124,228,188,0.14), rgba(143,126,245,0.12));
  border: 1px solid rgba(124,228,188,0.18);
  border-radius: 22px;
  padding: 18px;
  margin-top: 14px;
}

.progress {
  height: 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 999px;
  overflow: hidden;
  margin-top: 12px;
}

.progress > span {
  display: block;
  height: 100%;
  width: 68%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--violet-500), var(--cyan-400));
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
  padding: 12px;
  border-radius: 16px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
}

.member-main {
  display: flex;
  align-items: center;
  gap: 12px;
}

.badge-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.06);
  color: var(--text-soft);
  font-size: 0.7rem;
  border: 1px solid rgba(255,255,255,0.05);
}

.midnight-scene {
  position: relative;
  overflow: hidden;
  min-height: 420px;
  border-radius: 24px;
  background: linear-gradient(180deg, #0d1634 0%, #201a42 34%, #f0c986 100%);
  padding: 20px;
  border: 1px solid rgba(255,255,255,0.07);
}

.moon {
  position: absolute;
  right: 54px;
  top: 42px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff7d0, #f0d29d 60%, #dfe1f9 100%);
  box-shadow: 0 0 24px rgba(255, 233, 168, 0.45);
  animation: moonFloat 8s ease-in-out infinite alternate;
}

@keyframes moonFloat {
  0% { transform: translateY(0); }
  100% { transform: translateY(12px); }
}

.starfield {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.5px 1.5px, rgba(255,255,255,0.8), transparent 85%);
  background-size: 120px 120px;
  opacity: 0.8;
  animation: twinkle 7s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.6; }
  100% { opacity: 1; }
}

.mystery-card {
  position: relative;
  z-index: 2;
  margin-top: 180px;
  background: rgba(17, 22, 42, 0.62);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 18px;
}

.mirror-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
}

.empty-state {
  display: grid;
  place-items: center;
  min-height: 240px;
  text-align: center;
  color: var(--text-soft);
  border: 1px dashed rgba(255,255,255,0.12);
  border-radius: 18px;
  background: rgba(255,255,255,0.02);
}

@media (max-width: 920px) {
  .main-grid {
    grid-template-columns: 1fr;
  }
  .mirror-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .hero-actions {
    width: 100%;
  }
  .hero-actions > * {
    flex: 1 1 100%;
  }
  .topbar-inner,
  .room-header,
  .chat-head {
    flex-direction: column;
    align-items: flex-start;
  }
  .avatar-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .chat-form {
    grid-template-columns: 1fr;
  }
}
