---
outline: deep
---

# Logging Setup

::: tip
Setup is done on the [dashboard](../../core/dashboard).
:::

<video controls="controls" src="../../images/logging/setup.mp4" />

## Message Events

- Message edit
- Message delete: Individual and bulk message deletions

### Exempt Channels

Arcane will not post logs for messages in these channels.

## Server Events

- Channel create
- Channel delete
- Role create
- Role delete
- Role update
- Server update: Name & other various setting
- Emojis update: Creation, updates, and deletions
- Thread create
- Thread delete
- Thread update

### Exempt Channels Update Channels

Arcane will not post channel update logs for these channels.

## Member Events

- Member joined
- Member left
- Member roles changed
- Member nickname changed

## Voice Events

- Join voice channel
- Move voice channel
- Leave voice channel
- User mute state changes<sup>*</sup>
- User deaf state changes<sup>*</sup>
- User video or stream state changes<sup>*</sup>

<sup>*A debouncer will prevent users from spamming your logs by spamming mute/unmute/etc</sup>

## Command Events

- Arcane commands ran
- Other bot commands ran (slash commands only)
