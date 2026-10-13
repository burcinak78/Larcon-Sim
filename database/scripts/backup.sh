#!/usr/bin/env sh
# Kullanım: ./database/scripts/backup.sh [hedef_klasör]
# Repo kökünden çalıştırılır; .env içindeki POSTGRES_* değerlerini kullanır.
set -eu
OUT_DIR="${1:-./backups}"
mkdir -p "$OUT_DIR"
. ./.env
FILE="$OUT_DIR/${POSTGRES_DB}_$(date +%Y%m%d_%H%M%S).dump"
docker compose exec -T db pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc > "$FILE"
echo "Yedek: $FILE"
