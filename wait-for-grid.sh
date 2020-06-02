#!/bin/sh
# wait-for-grid.sh

set -e
  
host=$1
cmd=$2

# until curl -sSL "${host}/status" 2>$1 | jq -r "value.ready" | grep "true" >/dev/null; do
until curl -sSL "${host}/status"; do
  echo "Selenium not found"
  sleep 1
done

>&2 echo "Selenium is up - executing command"
exec $cmd
