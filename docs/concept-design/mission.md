# Mission

Mission is a collection of **tasks**, a bot has to do. Every task is connected to a specific location.

There are two types of missions:

- Compiled
- Runtime

They share some ideas, but are essentially very different.

## Compiled Missions

A sysadmin can create a mission in the editor. Then created mission can be used in two ways:

- Internal tool
- Connect a dialog starter to it

Missions are called compiled, because their execution can happen partly or fully before runtime, that saves time to get an answer in chat.

Mission compilation depth:

1. Freeze embeddings of questions in the locations (Small improvement in speed)
2. Freeze retrieval phase (Chunks are saved, but augmented prompts are still created in runtime, so map effect on tasks)
3. Freeze augmentation phase (All the augmented prompts will be saved, small variations are possible(depends on temperature), changes in map won't take any effect on prompts)
4. Freeze answer (Answer is static, no AI will be used in runtime)

### Internal tool

Compiled mission can be seen as a custom AI workflow with a knowledge about a company.

This can be used, but not restricted to:

- Marketing (creating social media posts)
