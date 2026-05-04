# Hublimoto — Docker Setup

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/) (included with Docker Desktop)
- `make` (optional, for Makefile shortcuts)

---

## Quick Start

### Using Makefile (recommended)
```bash
make build   # Build the Docker image
make up      # Start the container (detached)
```
Open http://localhost:3000

### Using Docker Compose directly
```bash
docker compose build
docker compose up -d
```

---

## Available Commands

| Command       | Description                          |
|---------------|--------------------------------------|
| `make dev`    | Run local dev server (npm run dev)   |
| `make build`  | Build the Docker image               |
| `make up`     | Start container in background        |
| `make down`   | Stop and remove container            |
| `make logs`   | Tail container logs                  |
| `make clean`  | Remove container, image, and volumes |

---

## How It Works

1. **Stage 1 (builder)** — Node 20 Alpine installs dependencies and runs `npm run build`
2. **Stage 2 (serve)** — nginx Alpine serves the `/dist` output on port 80
3. **nginx** is configured to redirect all routes to `index.html` for React Router support
4. The container exposes port **80** internally, mapped to **3000** on your host

---

## Notes

- The `base` path in `vite.config.ts` is set to `/` for Docker. If deploying to GitHub Pages, restore it to `/website-templates/site4/hublimoto/dist/`.
- To change the host port, edit `docker-compose.yml`:
  ```yaml
  ports:
    - "8080:80"  # change 8080 to any free port
  ```
