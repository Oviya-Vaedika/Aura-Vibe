# AURA VIBE

A private digital clubhouse for friend groups with private room access, chat, quizzes, polls, games, and a mystery game called MIDNIGHT.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Features

- Private room creation and secure join flow
- Room name uniqueness enforced server-side
- Avatar-based member profiles
- Group chat with private messaging
- Quiz, poll, and games sections
- MIDNIGHT social deduction loop
- Responsive animated UI

## Privacy model

- No public room directory
- No public community feed
- No room discovery
- Room join requires both exact room name and room code
- Backend validation enforces room uniqueness and access control
