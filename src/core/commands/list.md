---
outline: deep
---

# Command List

All commands support Discord slash commands.

::: tip
If a command does not support message/prefix commands it will be marked with an asterisk (*).
:::

## Misc

| **Command** | **Description** | **User Permissions** |
| - | - | - |
| `/help` | Receive a list of commands and help resources for Arcane | N/A |
| `/premium` | Receive options on how to purchase premium perks | N/A |
| `/vote` |  Receive a link to vote for Arcane | N/A |
| `/dashboard` | Receive a link to configure all of Arcane's settings via our dashboard | Manage Server |
| `/invite` | Receive a link to add Arcane to your Discord server | N/A |
| `/support` | Receive a link to Arcane's support server | N/A |
| `/avatar` | View a user's avatar | N/A |
| `/stats` | View basic information about Arcane | N/A |
| `/userinfo` | View a users's information | N/A |
| `/serverinfo` | View information on the current server | N/A |

## Leveling

| **Command** | **Description** | **User Permissions** |
| - | - | - |
| `/level` | Displays your or the specified member's level and XP progress | N/A  |
| `/leaderboard` | Display the servers top 10 and top 100 members | N/A  |
| `/boosters` | Display the list of XP role and channel boosters | N/A  |
| `/rewards` | Display the list of role rewards | N/A |
| `/card` | Manage your rank card settings | N/A |
| `/xp`<sup>*</sup><br><br>`/xp add`<br><br>`/xp remove`<br><br>`/xp set level`<br><br>`/xp set xp`<br><br>`/xp reset member`<br><br>`/xp reset server` | Add, remove, set, or reset a user's XP or level. Read more about [xp management](../../plugins/leveling/management.md) | [Manage Server](../../plugins/leveling/setup/xp-management.md) |

## Moderation

| **Command** | **Description** | **User Permissions** |
| - | - | - |
| `/warn` | Warn a user by sending them a private message | Manage Messages |
| `/mute` | Mute a user which prevents them from communicating | Manage Messages |
| `/kick` | Kick a user from the server | Kick Members |
| `/ban` | Ban a user from the server | Ban Members |
| `/purge` | Purge recent messages from the channel | Manage Messages |
| `/unmute` | Remove a user's mute | Manage Messages |
| `/unban` | Remove a user's ban | Ban Members |
| `/lock` | Lock the current channel and prevent members from communicating | Manage Channels |
| `/unlock` | Unlock the current channel | Manage Channels |
| `/slowmode` | Sets the current channels slowmode. To remove the slowmode don't input a time | Manage Messages |
| `/case`<sup>*</sup><br><br>`/case view`<br><br>`/case modify`<br><br>`/case view_user` | View a users cases, view a specific case, modify, or delete a case | Manage Messages |

## Roles

| **Command** | **Description** | **User Permissions** |
| - | - | - |
| `/role info` | View a role's information | Manage Roles |
| `/role add`<sup>*</sup> | Add a role to a member | Manage Roles & Above role | 
| `/role remove`<sup>*</sup> | Remove a role from a member | Manage Roles & Above role |
| `/role create`<sup>*</sup> | Create a new role | Manage Roles |
| `/role update`<sup>*</sup> | Update an existing role | Manage Roles & Above role |
