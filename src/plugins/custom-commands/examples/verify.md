---
outline: deep
search: false
---

# Verify Command

On this page we have two different verify commands. Firstly, we have a simple command which members run to verify themselves. The second example showcases a command where only a moderator can verify a user.


These commands showcase using the [storage](/tag-system/tags#storage), [add role](/tag-system/tags#modify-roles), & [requirements](/tag-system/tags#requirements) tags.

## Example 1

A simple verify command a new member would run.

```
{#:Define the role to assign. We will use the ID to prevent the bot from assigning the wrong role if role names change}
{let(verified_role):903042161086431233}
{user.add_role({verified_role})}

You have been verified! Welcome to the server. Check out <#902348151170670633>
```

Usage: `/verify` `!verify`

TODO: screenshot

## Example 2

An advanced verify command which can only be ran by moderators.

```
{#:Define the moderator role}
{let(moderator_role):458353820284485646}
{#:Define the role to assign}
{let(verified_role):903042161086431233}

{require_role:{moderator_role}}

{target.add_role({verified_role})}

{user.name} has verified {target.mention}. Welcome to the server. Check out <#902348151170670633>
```

Usage: `/verify target:Arcane chan` `!verify @Arcane chan`

TODO: screenshot
