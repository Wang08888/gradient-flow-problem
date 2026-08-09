#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$repo_root"

chrome="${CHROME_BIN:-}"
if [ -z "$chrome" ]; then
  for candidate in google-chrome chromium chromium-browser; do
    if command -v "$candidate" >/dev/null 2>&1; then
      chrome="$(command -v "$candidate")"
      break
    fi
  done
fi

if [ -z "$chrome" ]; then
  echo "No Chrome/Chromium binary found" >&2
  exit 3
fi

rendered=0
while IFS= read -r -d '' markdown_file; do
  html_file="$(mktemp --suffix=.html)"
  pdf_file="${markdown_file%.md}.pdf"
  title="$(basename "${markdown_file%.md}")"

  node scripts/md2html.js "$markdown_file" "$html_file" "$title"
  "$chrome" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --no-pdf-header-footer \
    --virtual-time-budget=25000 \
    --run-all-compositor-stages-before-draw \
    --print-to-pdf="$pdf_file" \
    "file://$(realpath "$html_file")"

  test -s "$pdf_file"
  rm -f "$html_file"
  echo "Rendered $pdf_file"
  rendered=$((rendered + 1))
done < <(find proofs -type f -name '*.md' -print0)

if [ "$rendered" -eq 0 ]; then
  echo "No Markdown reports found under proofs/" >&2
  exit 4
fi
