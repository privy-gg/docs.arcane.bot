---
outline: deep
search: false
---

# Suggest Command

A simple suggest command which showcases using the [embed](/tag-system/tags#embeds), [args](/tag-system/tags#args), & [redirect](/tag-system/tags#behavior) tags. The user's suggestion will be sent to your #suggestions channel.

```
{redirect:suggestions}

{embed.title:New suggestion}
{embed.description:{user.mention} has a new suggestion}
{embed.field:Suggestion|{message}}
{embed.color:#40B2B0}
{embed.footer:User ID: {user.id}}
{embed.timestamp}
```

Usage: `/suggest args:Make custom commands useful` `!suggest Make custom commands useful`

TODO: screenshot
