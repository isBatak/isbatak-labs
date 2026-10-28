#!/bin/sh
file=$(node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).tool_input?.file_path??""))')

case "$file" in
  *.ts | *.tsx | *.vue | *.svelte) ;;
  *) exit 0 ;;
esac

cd "$CLAUDE_PROJECT_DIR" || exit 0
output=$(node_modules/.bin/oxlint --deny-warnings "$file" 2>&1) && exit 0
echo "$output" >&2
exit 2
