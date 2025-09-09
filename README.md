# Repro case for Invalid Hook error.

This is a trivial JSX component that works fine until you start trying to use hooks, which point you'll see

```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
```

To run, do a `bun install` then a `bun run dev`.
