#!/usr/bin/env bash
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <iterations> [task-file]"
  exit 1
fi

cd "$(git rev-parse --show-toplevel)"

task="${2:-plans/task.md}"
progress="plans/progress.txt"
mode="${RALPH_PERMISSION_MODE:-auto}"
model="${RALPH_MODEL:-}"

if [ ! -f "$task" ]; then
  echo "Task file $task not found."
  exit 1
fi

branch="$(git branch --show-current)"
if [ "$branch" = "main" ]; then
  echo "Refusing to run on main. Check out a feature branch first."
  exit 1
fi

touch "$progress"

for ((i = 1; i <= $1; i++)); do
  echo "Iteration $i"
  echo "--------------------------------"
  result=$(claude -p --permission-mode "$mode" ${model:+--model "$model"} "Read $task (the PRD) and $progress (notes from earlier iterations), then follow AGENTS.md.
1. Find the highest-priority feature to work on and work only on that feature.
This should be the one YOU decide has the highest priority - not necessarily the first in the list.
2. Run pnpm typecheck and pnpm test in every package you touched, and pnpm exec oxlint on the files you changed at the root. Fix every error and Panda warning.
3. Update $task with the work that was done.
4. Append your progress to $progress.
Use this to leave a note for the next person working in the codebase.
5. Make a git commit of that feature on the current branch ($branch). Do not push.
ONLY WORK ON A SINGLE FEATURE.
If, while implementing the feature, you notice the PRD is complete, output <promise>COMPLETE</promise>.
")

  echo "$result"

  if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
    echo "PRD complete after $i iterations, exiting."
    osascript -e "display notification \"PRD complete after $i iterations\" with title \"Ralph\"" || true
    exit 0
  fi
done

echo "Ran $1 iterations without completing the PRD."
osascript -e "display notification \"Stopped after $1 iterations, PRD not complete\" with title \"Ralph\"" || true
