---
outline: deep
search: false
date: 9-2-2025
title: Leveling
---

# 9-2-2025

## Message XP

![Message XP](./modes.png)

You can now disable Message XP. Useful if you only want members earning xp for voice activity or reactions.

### Message XP Mode

::: tip
Read more about the modes [here](/plugins/leveling/setup/xp-options#message-xp-mode)
:::

Today we are introducing the option for Arcane to reward XP for every word in a message instead of just for an entire message.

By default Arcane will continue rewarding for entire messages but you can swap to the new **Per word** option on the [dashboard](/core/dashboard).

#### Example

Example message:

```
Hello world. I'm happy to be here!
```

With the default **Random** mode, Arcane will assign 15 to 40 XP for the message.

With the new **Per word** mode, Arcane will assign 1 XP for each word. The message contains 7 words total. 4 words are valid (Hello, world, happy, here) so they would earn 4 XP. 3 words are under 3 characters so they are invalid and do not earn any XP.
