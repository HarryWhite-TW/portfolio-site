# M2.18C Execution Start Note

Use this note together with:

- `docs/HOMEPAGE_AND_PAGE_TRANSITION_EXECUTION_PLAN.md`
- `docs/tasks/M2_18C_HOMEPAGE_CONSOLIDATION_TASK.md`

## Start rule

Before implementation, run:

```powershell
git status --short
git branch --show-current
git pull --ff-only origin feature/intro-cinematic-polish
git log -5 --oneline
```

Required state:

- branch is `feature/intro-cinematic-polish`
- worktree is clean before implementation
- the latest pulled branch contains all three documents listed above

The fixed commit SHA written inside the original task packet is informational only and may be older than the latest docs-only checkpoint. Do not stop merely because the latest commit SHA differs after pulling documentation updates.

Stop only if:

- the branch is wrong
- the pull fails
- the worktree is not clean
- one of the governing documents is missing

Then execute Batch A only. Do not begin M2.19 page-transition implementation in the same task. Do not commit or push.
