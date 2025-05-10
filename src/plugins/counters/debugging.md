---
outline: deep
---

# Debugging the counters plugin

Counters may not update for a few reasons:

### Arcane's Permissions
Arcane needs to have **all** of the following permissions for counters to work.

| **Permission** | **Reason** |
| - | - |
| Manage Guild | Arcane needs to be able to see how many bots/integrations are in your server |
| Manage Channels (Server) | Arcane needs to be able to create and edit voice channels |
| Manage Channels (Channel) | Arcane needs to be able to create and edit the voice channel |

### Server Activity

Arcane only updates counters in servers which are active. For your server to be considered active it needs to see message or member activity.

### Counter Cooldown

Arcane only updates counters every 15 to 20 minutes. Discord doesn't allow bots to update channels very frequently.
