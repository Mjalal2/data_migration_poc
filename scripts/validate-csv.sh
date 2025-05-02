#!/usr/bin/env bash
set -euo pipefail

for csv in data/*.csv; do
  echo "Validating $csv …"
  # replace `schema.json` with your actual schema file if needed
  head -n1 "$csv" | grep -qFf <(jq -r '.fields | join("\n")' schema.json)             || { echo "❌ Header mismatch in $csv"; exit 1; }
done
echo "✅ All CSVs passed schema validation."
