---
outline: deep
---

# Debugging the logging plugin

## Logs are not sending

Arcane needs to have the following permissions for logs to send:

| **Permission** | **Why** |
| - | - |
| View Channels | Arcane needs to be able to access the log channel(s) |
| View Audit Log | Arcane needs to view the audit log for certain logs |
| Manage Webhooks | Arcane uses webhooks to send logs at a faster rate |
| Send Messages | Arcane needs to be able to send messages |
| Attach Files | Arcane needs to be able to upload files |

## Logs are delayed

Logs can take a few minutes to send. [Premium](../../premium.md) server's logs are prioritized to be sent first.

## Messages are not being logged

::: info
Arcane will only log messages which have been sent within the [last hour](./setup#message-retention-limits). [Premium](../../premium.md) unlocks up to [12 hours](./setup#message-retention-limits)
:::

Arcane needs to have the following permissions for message logs to work:

| **Permission** | **Why** |
| - | - |
| View Channels | Arcane needs to be able to see when members send messages |
| Manage Webhooks | Arcane uses webhooks to send logs at a faster rate |
| Send Messages | Arcane needs to be able to send messages |
| Attach Files | Arcane needs to be able to upload files when messages are deleted in bulk |
