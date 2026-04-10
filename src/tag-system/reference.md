---
outline: deep
---

# Tag System v2 Reference

::: tip
Throughout the tag system docs we will refer to [custom commands](/plugins/custom-commands/index) as "cc"
:::

::: info
Tag System v2 has breaking changes. While we don't expect further breaking changes, we reserve the right to change, modify, remove, or break tags, syntax, variables, or functionality at any time for bug fixes, improvements, or other reasons.
:::

Tags are either a variable or a function. Function tags typically do not return a value and will be omitted from the response. On this page you will find a full list of supported tags. Tags which are not documented are unsupported and can be removed at any time. 

Variables can be either a string or an [array](#arrays).

## Variables

### Args

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{args}` | hello world | get all of the args |
| `{args[0]}` | hello | get the first arg |
| `{args[1]}` | world | get the second arg |
| `{args_array}` | hello\|world | the args as an [array](#arrays) |
| `{message}` | hello world | get all of the args |

### Member/User

`{user.xxx}` and `{member.xxx}` are interchangeable.

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{user.id}` | 295980401560649730 | the user's id |
| `{user.name}` | imdarkdiamond | the user's name |
| `{user.mention}` | @imdarkdiamond | the user's mention |
| `{user.roles}` | 12345\|123456\|1234567 | the user's roles as an [array](#arrays) |

### Target Member/User

The target is only available if a target was supplied. Eg `!test @imdarkdiamond`

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{target.id}` | 295980401560649730 | the user's id |
| `{target.name}` | imdarkdiamond | the user's name |
| `{target.mention}` | @imdarkdiamond | the user's mention |
| `{target.roles}` | 12345\|123456\|1234567 | the user's roles as an [array](#arrays) |

### Guild/Server

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{guild.id}` | 437808333295058955 | the guild's id |
| `{guild.name}` | Arcane | the guilds's name |
| `{guild.membercount}` `{guild.members}` | 360290 | the guilds's member count |
| `{guild.icon}` | https://cdn.discord.com/xxx | link to the guild's icon |
| `{guild.owner}` | 295980401560649730 | the guild's owner id |

### Channel

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{channel.id}` | 902348151170670633 | the channel's id |
| `{channel.name}` | general | the channel's name |
| `{channel.mention}` | #general | the channel's mention |
| `{channel.nsfw}` | false | is the channel set as NSFW |

## Functions

### Embeds

| **Function** | **Example** | **Description** |
| - | - | - |
| `{embed.title:}` | `{embed.title:Hello World}` | add a title to an embed |
| `{embed.description:}` | `{embed.description:Hello World}` | add a description to an embed |
| `{embed.footer:}` | `{embed.footer:Hello World}` | add a footer to an embed |
| `{embed.field:}` | `{embed.field:Title\|Description}` | add a field with a title and description to an embed |
| `{embed.color:}` | `{embed.color:40B2B0}` `{embed.color:#40B2B0}` | add a color to an embed |
| `{embed.timestamp}` | `{embed.timestamp}` | add a timestamp to an embed |
| `{embed.author:}` | `{embed.author:Name\|url\|image url}` | add an author to an embed. url & image url are optional |
| `{embed.image:}` | `{embed.image:https://cdn.discord.com}` `{embed.image:levelup.png}` | add an image to the embed. can be an external url or the filename of the image Arcane uploads |

### Modify Roles

| **Function** | **Example** | **Description** |
| - | - | - |
| `{user.add_role()}` `{addrole:}` | `{user.add_role(Pic perms)}` `{user.add_role(123456789101112)}` `{addrole:Pic perms}` | add a role to the user who triggered the cc |
| `{user.remove_role()}` `{removerole:}` | `{user.remove_role(Pic perms)}` `{user.remove_role(123456789101112)}` `{removerole:Pic perms}` | remove a role from the user who triggered the cc |
| `{target.add_role()}` | `{target.add_role(Pic perms)}` `{target.add_role(123456789101112)}` | add a role to the target user |
| `{target.remove_role()}` | `{target.remove_role(Pic perms)}` `{target.remove_role(123456789101112)}` | remove a role from the target user |


### Reactions

::: tip Premium only
[Premium servers](/premium.md) can have up to 5 react tags. Non-premium servers can have up to 2 react tags.
:::

| **Function** | **Example** | **Description** |
| - | - | - |
| `{react:}` | `{react:😎}` | add a reaction to the response |

### Purge

| **Function** | **Example** | **Description** |
| - | - | - |
| `{purge:}` | `{purge:10}` | delete X messages from the channel. limited to 100 messages |

### Choose

| **Function** | **Example** | **Description** |
| - | - | - |
| `{choose:}` | `{choose:Hello world\|Bye world\|What is world}` | choose an element from an array of items |

### Requirements

::: tip
You can have multiple requirement functions in a cc
:::

| **Function** | **Example** | **Description** |
| - | - | - |
| `{require_role:}` | `{require_role:Admin}` `{require_role:520734047736037378}` | limit the cc to a role |
| `{require_channel:}` | `{require_channel:general}` `{require_channel:902348151170670633}` | limit the cc to a channel |
| `{require_user:}` | `{require_user:imdarkdiamond}` `{require_user:295980401560649730}` | limit the cc to a user |
| `{require_permission:}` | `{require_permission:Manage Messages}` `{require_perm:Admin}` | limit the cc to a permission |
| `{deny_role:}` | `{deny_role:bad}` `{deny_role:520734047736037378}` | block the cc if the user has the role |
| `{deny_channel:}` | `{deny_channel:general}` `{deny_channel:902348151170670633}` | block the cc in a channel |
| `{deny_user:}` | `{deny_user:imdarkdiamond}` `{deny_user:295980401560649730}` | block the cc from a user  |
| `{deny_permission:}` | `{deny_permission:Manage Messages}` `{deny_permission:Admin}` | block the cc from a permission |

### Behavior

| **Function** | **Example** | **Description** |
| - | - | - |
| `{delete}` | `{delete}` | delete the message that triggered the cc |
| `{delete_reply:}` | `{delete_reply:30}` | delete the reply after X time in seconds |
| `{redirect:}` | `{redirect:general}` `{redirect:902348151170670633}` | redirect the cc response to a different channel |
| `{break:}` | `{break:Ending early!}` | end the cc early and return a message |

### Conditionals

| **Function** | **Example** | **Description** |
| - | - | - |
| `{if(condition comparison op condition):then\|else}` | `{if({user.name}==imdarkdiamond):Hello Dark\|You're not dark!}` | evaluates a single condition. Shows/executes `then` if true, `else` if false. |
| `{any(condition comparison op condition\|...):then\|else}` | `{any({user.name}==imdarkdiamond\|{user.name}==bob):Hello Dark or Bob\|You're not Dark or Bob!}` | evaluates multiple conditions with OR logic. Shows/executes `then` if at least one condition is true, otherwise `else`. |
| `{all(condition comparison op condition\|...):then\|else}` | `{all({user.name}==imdarkdiamond\|{add:5+{args}}>10):You're Dark and {args} + 5 is greater than 10\|You're not Dark or {args} + 5 is not greater than 10}` | evaluates multiple conditions with AND logic. Shows/executes `then` if every condition is true, otherwise `else`. |

### Storage

Storage is not persistent and only lives during the cc execution. Persistent storage may be provided in a future update.

| **Function** | **Example** | **Description** |
| - | - | - |
| `{=(name):value}` | `{=(hello):world}` | assign "world" to the "hello" variable |
| `{name}` | `{hello}` | get the "hello" variable (if it exists) |

### Arrays

Arrays are defined as `value0|value1|value2|...`.

| **Function** | **Example** | **Description** |
| - | - | - |
| `{arrayname[i]}` | `{args[0]}` `{args[2]}` `{myarray[0]}` | get the element at an index from an array |

### Util

| **Function** | **Example** | **Description** |
| - | - | - |
| `{len:}` | `{len:test\|test1\|test2}` -> `3` `{len:string length}` -> `13` | get the length of an array or string |
| `{join():}` | `{join( ):hello\|world}` -> `hello world` `{join(_):hello\|world}` -> `hello_world` | join elements of an array into a string |
| `{contains(value):array}` `{contains(value):string}` | `{contains(hello):hello\|world}` -> `true` `{contains(world):hello world}` -> `true` | check an array for an element |
| `{replace(replace\|with):}` | `{replace(hello\|bye):hello world}` -> `bye world` | replace part of a string with another string |
| `{uppercase:}` | `{uppercase:hello world}` -> `HELLO WORLD` | make a string uppercase |
| `{lowercase:}` | `{lowercase:HELLO WORLD}` -> `hello world` | make a string lowercase |
| `{pretty:}` | `{pretty:123456}` -> `123,456` | format a number |

### Comments

| **Function** | **Example** | **Description** |
| - | - | - |
| `{#:}` | `{#:what a cool comment}` | write a comment for future reference. will be ommited and never shown to the user |

### Math

| **Function** | **Example** | **Description** |
| - | - | - |
| `{add:}` | `{add:5+5}` | add two numbers |
| `{sub:}` | `{sub:5-5}` | subtract two numbers |
| `{multiply:}` | `{add:5*5}` | multiply two numbers |
| `{divide:}` | `{divide:5/5}` | divide two numbers |
| `{round:}` | `{round:5.5}` | round a number |
| `{floor:}` | `{floor:5.5}` | round down a number |
| `{range:}` | `{range:1\|5}` | generate a random number in the range |

# Special Characters

In some tags you may need to use special character tags due to how the tag system parses tags. 

| **Function** | **Output** |
| - | - | 
| `{lcurly}` | `{` |
| `{rcurly}` | `}` |
| `{lparen}` | `(` |
| `{rparen}` | `)` |
| `{lbracket}` | `[` |
| `{rbracket}` | `]` |
| `{pipe}` | `\|` |
