# Larcon-Sim

Larcon eğitim içeriklerini interaktif online simülasyonlara çeviren web uygulaması.

| Klasör | İçerik |
|---|---|
| `frontend/` | Next.js (standalone) |
| `backend/` | ASP.NET Core Web API + testler |
| `database/` | PostgreSQL init/seed ve yedekleme script'leri |

Mimari, kararlar ve aşama durumu Obsidian vault'ta tutulur.
Reverse proxy ve TLS bu repoda yoktur: SSL Cloudflare'de sonlanır, uygulama düz HTTP ile çalışır.

## Lokal çalıştırma

```bash
cp .env.example .env
docker compose up -d --build
docker compose ps
```

| Adres | Ne |
|---|---|
| http://localhost:3000 | Frontend (backend durumunu gösterir) |
| http://localhost:3000/api/health | Frontend health |
| http://localhost:8080/health | Backend health |
| http://localhost:9001 | Storage konsolu |
| localhost:5432 | PostgreSQL |

Backend testleri (TeamCity'de de aynı komut):

```bash
docker build --target test backend
```

Durdurmak: `docker compose down` (verileri de silmek için `-v`).

## Branch'ler

- `develop` — geliştirme; TeamCity bu branch'i dinler.
- `main` — prod.

## Migration'lar

Şema EF Core migration'ları ile yönetilir. Migration'lar uygulama açılışında otomatik çalışmaz; deploy'da ayrı bir adımdır.
