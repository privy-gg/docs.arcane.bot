---
outline: deep
---

# Frequently Asked Questions

Here are some common questions we receive. Please read them all before asking for help in our server.

#### Quick Jump

- [General](#general)
- [Leveling](#leveling)

## General

### How do I join your support server?

You can join our support server here: [`https://discord.gg/arcane`](https://discord.gg/arcane)

### Difference between Arcane and Arcane-chan ✨

::: warning
Don't invite both. It will **break** things.
:::

Arcane and Arcane-chan ✨ are the same bot but with a different name and avatar. Just pick one which fits your servers theme!

### Roles aren't assigning

Arcane needs to have the **Manage Roles** permission & be **above** the roles you want Arcane to be able to assign. Arcane will not assign elevated roles. (Roles which have the `Administrator` or `Manage Server` permission)

<video controls="controls" src="/images/role-permissions.mp4" />

### Channel not found

Arcane will not let you save an invalid or deleted channel. If your config has deleted channels you will need to set the channel to "None" or select a new channel before the dashboard will let you save.

## Leveling

### How do I redirect the levelup message to one channel?

You can set the channel where the levelup message gets sent under the leveling plugin settings. See [Levelup Message](/plugins/leveling/setup/levelup-message).

### How do I add role rewards?

Role rewards are managed under the leveling plugin. See [Role rewards](/plugins/leveling/setup/role-rewards).

### Role rewards aren't assigning. 

For permission issues see [here](#roles-aren-t-assigning). If Arcane has permissions then [update frequency](/plugins/leveling/setup/role-rewards#update-frequency) describes when Arcane updates role rewards.
