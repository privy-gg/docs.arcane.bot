---
outline: deep
search: false
date: 1-29-2025
title: Leveling rewrite
---

# 1-29-2025

## Leveling Update
This is easily the largest update we've ever done. This has been over 2 years in the making.

There's some stuff making a return and a *lot* of new features being released for the first time. We have even more planned for later this year.

In summary, we've added a whole ton of new features and improvements to the leveling plugin & brought back message commands.

### Reaction XP
Arcane can now award members for applying reactions in your server! Fully customizable on the dashboard. (Default: 25 xp every 5 minutes)

### Voice XP
Voice XP has been released for a while now but we're very happy to announce some more highly requested customization.

#### Anti AFK & Minimum required members
You can now choose to disable Arcane's anti afk system and how many members (non bots) for voice leveling to kick on.

### XP Options

#### Min & max
You can now set the minimum & maximum to whatever value you want (there are still *some* limits. You do not need to earn a million xp per message). Arcane can now handle multiple level ups per event.

#### Curve
You can now select between 3 different leveling curves.
- Linear: `(level * 100) + 75` (default)
- Exponential: `5 * (level^2) + (level * 50) + 75`
- Flat: `1000` (adjust using multiplier)
- Custom: `x * x + 1 etc` Coming in a future update. Still needs some polish

### XP Modifiers
XP Modifiers no longer have any randomness to them. If you set a 50% boost it will now be a flat 50% boost instead of randomly 0 to 50%.

#### XP Channels
You can now give specific channels a specific boost. Same as role boosters.. but for channels.

### Role Rewards

#### Role Rewards
We have added support for multiple role rewards per **level**. Premium servers can have up to 3 roles per level.

#### First Place Role
Arcane can now assign a role to the member with the highest XP. This is updated once per day or once per hour for premium servers.

### Leaderboard

#### New Leaderboard Types
We have introduced 2 new leaderboard types. Weekly and Monthly. These reset every week and month at 12am UTC.

Optionally, Arcane can also post a summary each week & month in a channel of your choice.
#### Online Leaderboard
The online leaderboard has been given a nice refresh. Administrators can upload an image to be displayed. (NSFW content or anything we deem not acceptable will result in an instant termination with no appeal or warnings)

### Rank Card
Rank card configuration has moved to our website. This makes it much easier to select colors and upload images! We've migrated most of the imgur links but some were not moved over due to technical issues. We are sorry for that. Please re-upload your image if it was not migrated. (NSFW content or anything we deem not acceptable will result in an instant termination with no appeal or warnings)

### Dashboard
The leveling plugin page has been given a refresh. Things are a bit more organized and easier to understand. We show some warnings if permissions are not valid. You can also test your levelup message now. :)

Few other pages have also gotten a few minor changes.


## Message Commands
Arcane now supports message commands and Discord Slash Commands. We removed these when Discord introduced Slash Commands because we were told message commands would not be allowed. We then began to slowly rewrite the bot and never added support for them. Well Discord doesn't care so we've spent the time to rewrite all the commands to support both.

Arcane's default message prefix is `!`. If you're an OG you'll remember we used `a` but we have decided against using this again but of course you can set it to `a` again on the dashboard. ;)

Not all commands are supported as message commands. (/xp is only available as a / command)

Custom commands are still prefix only. They will support message commands later this year.
