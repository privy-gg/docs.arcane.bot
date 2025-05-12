---
outline: deep
---

# XP Options

::: tip
Setup is done on the [dashboard](../../../core/dashboard).
:::

![XP Options](../../../images/leveling/xp-options.png)

## Formula

### Curve

Arcane currently offers 3 curve options:

| **Name** | **Formula** |
| - | - |
| Linear (default) | `(level * 100) + 75` |
| Exponential | `5 * (level^2) + (level * 50) + 75` |
| Flat/Constant | `1000` |

### Multiplier

The multiplier is used to modify the formula. `Formula * Multiplier`

<details>
	<summary>View examples:</summary>

::: info Example
Let's say you are using the Constant formula which requires exactly 1000 xp for every level.

| **Multiplier** | **Required XP for all levels** |
| - | - |
| 1 | 1000 * 1 = 1000 |
| 5 | 1000 * 5 = 5000 |
| 10 | 1000 * 10 = 10000 |
| 0.5 | 1000 * 0.5 = 500 |

Or if you're using the Linear formula:

| **Multiplier** | **Required XP for level 10** |
| - | - |
| 1 | (10 * 100) + 75) * 1 = 1075 |
| 5 | ((10 * 100) + 75) * 5 = 5375 |
| 10 | ((10 * 100) + 75) * 10 = 10750 |
| 0.5 | ((10 * 100) + 75) * 0.5 = 537.5 = 538 |
:::
</details>

### Max Level

The max level is the max level which your members are able to earn. If none is set then members can earn an unlimited amount of XP and levels.

## XP Options

All XP sources have the following settings:

| **Setting** | **Explanation** |
| - | - |
| Min | The minimum amount of XP members will earn |
| Max | The minimum amount of XP members will earn. |
| Cooldown | This is how often (in seconds) members can earn for the XP source |


### Message XP

Message XP cannot be disabled. If you do not want your members to earn any XP when sending messages you can add all your text channels as no xp channels.

### Voice XP

::: tip Premium only
Voice XP requires a [Premium subscription](/premium.md) & the Premium bot in your server
:::

Arcane can reward members XP for participating in your voice channels.

#### Minimum Members

This is the amount of members that need to be in a single voice channel for voice XP to start awarding XP.

::: info
Arcane only considers a member to be active and in the voice channel if they are unmuted and not deaf. This is because Arcane does not join the voice channel. This would limit voice XP to one voice channel, be expensive to run, and a privacy nightmare.
:::

#### Anti AFK

Arcane automatically starts to lower how much XP is given to members after they have been in a voice channel for multiple hours in one session. If you want members to earn an unlimited amount of XP in one session you can disable the anti afk feature.
