# database

- `init/` — PostgreSQL ilk açılışta buradaki `*.sql` / `*.sh` dosyalarını bir kez çalıştırır (yalnızca boş volume'da). Şema burada değil, EF Core migration'larında tutulur.
- `scripts/backup.sh` — `pg_dump` ile yedek alır.
