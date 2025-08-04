---
outline: deep
---

# XP/Level Management

## Max level VS `/xp` limit

### Max Level

The max level members can organically earn. You can configure this yourself on the [dashboard](./setup/xp-options#max-level) to any value (or no value for unlimited).

### `/xp` limit

The **`/xp` limit** controls the highest level that can be manually set or modified. This limit exists to **prevent abuse** and keep leveling fair for all members in the server. By default, the limit is set to **100**. [Premium](../../premium) servers have a dynamic limit past level 100.

#### Premium servers:
[Premium](../../premium) servers have a **dynamic** limit based on your server's **highest leveled members**.

- It increases **automatically** as your top users level up organically
- It **cannot** be increased manually or requested
- The exact cap is **not shown**
- In some cases, it may be lower than your highest member, meaning you may be unable to assign more XP or levels to that user until other users level up

## `/xp` Command

The `/xp` command is available for you to manage your members xp & level values.

| **Sub-command** | **Explanation** |
| - | - |
| `/xp add` | Add XP to a member |
| `/xp remove` | Remove XP from a member |
| `/xp set xp` | Change the XP progress for a member's current level |
| `/xp set level` | Change the level for a member |
| `/xp reset server` | Reset the XP and level of everyone in the server |
| `/xp reset member` | Reset the XP and level of a member |

## Resetting statistics

::: danger DANGER
Resetting statistics CANNOT be undone
:::

By default, when resetting levels and xp, Arcane will not reset statistics (messages, reactions, voice time, etc). If you would like these to be reset you can toggle reset stats when running `/xp` or when on the online leaderboard.

![Reset stats](../../images/leveling/reset-stats.png)

## Resetting members who have left

::: tip
Arcane can automatically reset members who leave your server with the [Auto reset](./setup/leaderboard#auto-reset) setting.
:::

To reset the XP & level of a member who has left the server you will need to go to the online leaderboard.

<video controls="controls" src="../../images/leveling/reset-left-member.mp4" />
