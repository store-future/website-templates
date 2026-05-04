.PHONY: dev build up down logs clean

dev:
	npm run dev

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

clean:
	docker compose down --rmi all --volumes
