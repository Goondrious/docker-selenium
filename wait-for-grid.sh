#!/bin/sh
# wait-for-grid.sh

set -e
  
host=$1
nodes=$2
cmd=$3

# until curl -sSL "${host}/status" 2>$1 | jq -r "value.ready" | grep "true" >/dev/null; do
until curl -sSL "${host}/grid/api/hub" | jq -r ".slotCounts.total" | grep -q "${nodes}"; do
  echo "Selenium not found"
  sleep 1
done

>&2 echo "Selenium is up - executing command"
exec $cmd
