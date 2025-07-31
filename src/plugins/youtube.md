---
outline: deep
---

# Youtube Notifications

Arcane can notify your members of new videos, streams, and shorts.

## Setup

::: tip
Setup is done on the [dashboard](../core/dashboard).
:::

<video controls="controls" src="../images/youtube-notification-creation.mp4" />

### Youtube Channel ID

You will need the Youtube Channel ID of the channel you want video notifications for. We recommend using https://commentpicker.com/youtube-channel-id.php to get the ID.

### Notification Message

Default notification message:
```
{video.url} was just uploaded. Check it out!
```

#### Tags

- `{video.url}` - The url of the video
- `{video.title}` - The title of the video, short, or stream
- `{video.author}` - The channel name

#### Mentioning roles

You can mention @everyone or @here by putting `@everyone` or `@here` in the message.

To mention a role the format is `<@&ROLE_ID>`. For example: `<@&1367681624841519204>`

Here's a simple way to get the role id. Just do this in a private channel so you don't ping anyone ;)

<video controls="controls" src="../images/get-role-id.mp4" />

### Limits

::: tip Premium only
If you have reached the 5 alert limit you can purchased more alerts by reaching out in our [support server](https://discord.gg/arcane) or by emailing contact@privy.gg
:::

| **Tier** | **Youtube Alerts** |
| - | - |
| Free | 2 |
| Premium | 5 |
