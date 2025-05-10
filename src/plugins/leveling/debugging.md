---
outline: deep
---

# Debugging the leveling plugin
Arcane's leveling module has lots of moving parts so its easy to make it "not work"

## Members are not gaining XP

Many things can be incorrectly configured and make Arcane appear to need fixing. Just note that Arcane **does not** just "break" and stop giving XP. If Arcane is not giving users XP, then you should check the following:

### No XP Roles
Verify that the user or mebers do not have a no XP role.

### No XP Channels

::: danger Pay attention to the mode selected

- **No XP channels** works as a **blacklist**. Members will **not** earn any XP in the channels selected.

- **XP channels** works as a **whitelist**. Members will **only** earn XP in the channels selected.
:::

Verify that the user or members are not speaking in a no XP channel. Make sure to double check the mode you have selected for the no XP channels.

### Arcane's Permissions
Arcane needs to have **all** of the following permissions for leveling to work.

| **Permission** | **Reason** |
| - | - |
| View Channels/Read Messages | Arcane needs to be able to see when members send messages |
| Send Messages | Arcane needs to be able to send messages when members level-up (if enabled) |
| Attach Images | Arcane needs to be able to send images when members level-up (if enabled) |

### Max Level
Verify that the member or members have not hit the max level.

## Members are not gaining XP in voice channels

Make sure to go through [Members are not gaining XP](./debugging#members-are-not-gaining-xp).

### Premium Bot

Voice leveling requires the premium bot. Make sure that you have invited the [Premium bot](/premium#premium-bot) to your server.

### Members

Make sure that there are at least the [minimum number](./setup/xp-options#minimum-members) of non-muted and non-deaf members in the voice channel.


## Role rewards are not assigning

::: info
Arcane does not update roles when members earn xp, only level-ups. Mass role assignment is **not** available if you did not setup permissions correctly.
:::

Please see our [frequently asked questions](../../frequently-asked-questions#roles-aren-t-assigning). If Arcane has the permissions to manage roles then your member's roles will be updated the next time they level-up, not the next time they earn XP. Arcane will not do mass role updates.


## Levelup message wont send

Arcane needs to have **all** of the following permissions for the levelup message to send:

| **Permission** | **Reason** |
| - | - |
| View Channels/Read Messages | Arcane needs to be able to see when members send messages and view the channel |
| Send Messages | Arcane needs to be able to send messages |
| Attach Images | Arcane needs to be able to send images |
| Embed Links | Arcane needs to be able to embed links |


## Weekly/Monthly leaderboards don't reset

Weekly and monthly leaderboards will only reset if you have the respective [notification](./setup/highlights) enabled. This is a known issue, no ETA for fix.
