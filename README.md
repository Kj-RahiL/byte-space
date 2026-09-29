# NexaChat

A real-time 1:1 and group chat application — Next.js + TypeScript frontend built against the take-home assignment's REST + Socket.IO chat API.

## Live Demo

|                      | Link                                                        |
| -------------------- | ----------------------------------------------------------- |
| Chat app             | https://nexachatapp.netlify.app/                            |
| API docs (given)     | https://frontend-task-chatapp.onrender.com/docs/            |
| My API documentation | https://github.com/Kj-RahiL/nexachat/blob/main/DECISIONS.md |

## Overview

NexaChat lets a user log in with just a phone number and name (no separate signup), start 1:1 conversations by searching for another user, create group conversations, and send/receive messages in real time over Socket.IO. Group admins can rename the group, add members, promote other members to admin, and remove members; any member can leave.

## Tech Stack

| Layer            | Choice                            | Why                                                         |
| ---------------- | --------------------------------- | ----------------------------------------------------------- |
| Framework        | Next.js (App Router) + TypeScript | Type safety + component architecture out of the box         |
| Client/UI state  | Zustand                           | Auth info and UI-only state, kept separate from server data |
| Server state     | TanStack Query                    | Caching, refetching, loading/error states for all API data  |
| HTTP client      | Axios                             | Centralized API communication                               |
| Real-time        | Socket.IO client                  | `message:new` / `conversation:updated` events               |
| Route protection | Next.js Middleware                | Server-readable auth check instead of a client-only guard   |
| Styling          | Tailwind CSS                      | Utility-first, fast iteration                               |
| Motion           | Framer Motion                     | Modal/panel transitions                                     |

Full reasoning and trade-offs for these choices are in [`DECISIONS.md`](./DECISIONS.md).

## Features Implemented

- **Login** — phone number + name; new numbers auto-register, existing numbers log in
- **Start a conversation** — search by name/number, start a 1:1 chat
- **Group conversations** — create with multiple participants
- **Message history** — sender vs. receiver visually distinguished, per-message timestamps
- **Sending messages** — empty messages blocked; optimistic send (message appears instantly, reconciled on server response)
- **Real-time updates** — incoming messages land via Socket.IO without a manual refresh
- **Loading / empty / error states** — handled across conversation list, message list, and search
- **Auto-scroll** — jumps to latest message by default, but doesn't yank the user down if they've scrolled up to read history (shows a "New messages" pill instead)
- **Group management** — rename, add member, promote to admin, remove member/leave — all gated to admins where the API requires it

## Project Structure

```
nexachat/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── route.ts        # auth route handler
│   │   ├── chat/
│   │   │   └── page.tsx            # main chat screen
│   │   ├── login/
│   │   │   └── page.tsx            # login screen
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   ├── providers.tsx           # QueryClientProvider etc.
│   │   ├── globals.css
│   │   └── page.tsx                # landing page (Part 2)
│   ├── components/
│   │   ├── chat/                   # ChatSidebar, ChatHeader, MessageList,
│   │   │                           # MessageInput, GroupInfo, NewConversation, ...
│   │   ├── landing/                 # Part 2 landing page components
│   │   ├── login/
│   │   ├── providers/
│   │   └── LogoutButton.tsx
│   ├── constants/
│   ├── hooks/                       # useConversations, useGroup, useMessageAction,
│   │                                 # useSocket, useUsers
│   ├── lib/                         # api (axios instance), socket, format, chat-adapters
│   ├── services/                    # conversationService, groupService, messageService
│   ├── stores/                      # authStore (Zustand)
│   ├── types/                       # conversations.ts, group.ts, chat.ts
│   └── proxy.ts
├── .env.local
├── .gitignore
├── README.md
├── DECISIONS.md
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm — adjust commands below accordingly)

### 1. Clone and install

```bash
git clone <your-repo-url>
cd nexachat
npm install
```

### 2. Environment variables

Create `.env.local` in the project root:

```bash
# Base URL the axios instance (src/lib/api.ts) targets
NEXT_PUBLIC_API_BASE_URL=https://frontend-task-chatapp.onrender.com/api

# Socket.IO server — same host, root origin (not /api)
NEXT_PUBLIC_SOCKET_URL=https://frontend-task-chatapp.onrender.com
```

> Double-check these variable names against what `src/lib/api.ts` and `src/lib/socket.ts` actually read — fill in the real ones your code uses if they differ.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Production build

```bash
npm run build
npm start
```

## API

This app is built against the provided chat API (REST + Socket.IO):

- Swagger docs (given): https://frontend-task-chatapp.onrender.com/docs

Auth: `POST /auth/login` with `{ phone, name }` returns a JWT. Send it as `Authorization: Bearer <token>` on every protected REST call, and in the Socket.IO handshake `auth: { token }`.

## Notes on the API

A few things worth knowing if you're reading the code:

- There is no `GET /conversations/:id` endpoint — group admin/participant data is read directly off the `GET /conversations` list response, since group-type items there already include full `admins` and `participants`.
- `POST /conversations` (starting a 1:1) returns only `{ _id, participants, createdAt }` — no participant name/details — so the UI points at the new conversation by id and lets the invalidated conversation list refetch fill in the rest.

More on issues encountered and how they were handled: see [`DECISIONS.md`](./DECISIONS.md).

## Thought Process / Write-up

Architecture rationale, design decisions, how AI tools were used, trade-offs, and what I'd improve with more time: [`DECISIONS.md`](./DECISIONS.md).
