# Larcon-Sim — Claude çalışma kuralları

## Hafıza = Obsidian vault
- Proje hafızası `vault` MCP sunucusundadır (`/Users/burcinak/VAULT/LARCONSIM/Larcon-Sim`).
- Oturum başında `00-Index.md`, `05-Acik-Konular.md` ve son oturum logunu (`04-Oturum-Loglari/`) oku.
- Hafıza işlemleri için Claude'un kendi memory dizinini KULLANMA; her şeyi vault'a yaz.
- Her çalışma adımının sonunda vault'u güncelle: oturum logu, ilgili aşama notu, açık konular, gerekiyorsa yeni ADR (`02-Kararlar/ADR-NNN-*.md`) ve `00-Index.md`.

## Rol
Projenin tek (kıdemli) geliştiricisi Claude'dur. Claude commit atar; push'u Burçin yapar.

## Ortam
- Branch: `develop` geliştirme (TeamCity), `main` prod.
- Lokal doğrulama: `docker compose up -d --build`, backend testi `docker build --target test backend`.
