---
outline: deep
---

# Tag Reference

TODO:

Tags are either a variable or a function. Function tags typically do not return a value and will be omitted from the response. On this page you will find a full list of supported tags. Some tags have additional aliases which you may find, but if they are not documented they can be removed at any time.

Variables can be either a string or an [array](#arrays).

## Variables

TODO:

### Args

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{args}` | hello\|world | the args as an [array](#arrays) |
| `{args[0]}` | hello | get the first arg |
| `{args[1]}` | world | get the second arg |
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
| `{guild.icon}` | TODO | link to the guild's icon |
| `{guild.owner}` | 295980401560649730 | the guild's owner id |

### Channel

| **Variable** | **Example** | **Description** |
| - | - | - |
| `{channel.id}` | 902348151170670633 | the channel's id |
| `{channel.name}` | general | the channel's name |
| `{channel.mention}` | #general | the channel's mention |
| `{channel.nsfw}` | false | is the channel set as NSFW |

## Functions

TODO:

### Embeds

| **Function** | **Example** | **Description** |
| - | - | - |
| `{embed.title:}` | `{embed.title:Hello World}` | add a title to an embed |
| `{embed.description:}` | `{embed.description:Hello World}` | add a description to an embed |
| `{embed.footer:}` | `{embed.title:Hello World}` | add a footer to an embed |
| `{embed.field:}` | `{embed.field:Title|Description}` | add a field with a title and description to an embed |
| `{embed.color:}` | `{embed.color:40B2B0}` `{embed.color:#40B2B0}` | add a color to an embed |
| `{embed.titlestamp}` | `{embed.timestamp}` | add a timestamp to an embed |

// TODO: embed.author cause i cant remember it
| `{embed.author:}` | `{embed.author:}` | add an author field to an embed |

### Modify Roles

| **Function** | **Example** | **Description** |
| - | - | - |
| `{user.add_role()}` `{addrole:}` | `{user.add_role(Pic perms)}` `{user.add_role(123456789101112)}` `{addrole:Pic perms}` | add a role to the user who triggered the cc/ar |
| `{user.remove_role()}` `{removerole:}` | `{user.remove_role(Pic perms)}` `{user.remove_role(123456789101112)}` `{removerole:Pic perms}` | remove a role from the user who triggered the cc/ar |
| `{target.add_role()}` | `{target.add_role(Pic perms)}` `{target.add_role(123456789101112)}` | add a role to the target user |
| `{target.remove_role()}` | `{target.remove_role(Pic perms)}` `{target.remove_role(123456789101112)}` | remove a role from the target user |

### Choose

| **Function** | **Example** | **Description** |
| - | - | - |
| `{choose:}` | `{choose:Hello world\|Bye world\|What is world}` | choose an element from an array of items |

### Requirements

::: tip
You can have multiple requirement functions in a cc/ar
:::

| **Function** | **Example** | **Description** |
| - | - | - |
| `{require_role:}` | `{require_role:Admin}` `{require_role:520734047736037378}` | limit the cc/ar to a role |
| `{require_channel:}` | `{require_channel:general}` `{require_channel:902348151170670633}` | limit the cc/ar to a channel |
| `{require_user:}` | `{require_user:imdarkdiamond}` `{require_user:295980401560649730}` | limit the cc/ar to a user |
| `{require_permission:}` | `{require_permission:Manage Messages}` `{require_perm:Admin}` | limit the cc/ar to a permission |
| `{deny_role:}` | `{deny_role:bad}` `{deny_role:520734047736037378}` | block the cc/ar if the user has the role |
| `{deny_channel:}` | `{deny_channel:general}` `{deny_channel:902348151170670633}` | block the cc/ar in a channel |
| `{deny_user:}` | `{deny_user:imdarkdiamond}` `{deny_user:295980401560649730}` | block the cc/ar from a user  |
| `{deny_permission:}` | `{deny_permission:Manage Messages}` `{deny_permission:Admin}` | block the cc/ar from a permission |

### Behavior

| **Function** | **Example** | **Description** |
| - | - | - |
| `{delete}` | `{delete}` | delete the message that triggered the cc/ar |
| `{delete_reply:}` | `{delete_reply:30}` | delete the reply after X time in seconds |
| `{redirect:}` | `{redirect:general}` `{redirect:902348151170670633}` | redirect the cc/ar response to a different channel |
| `{break}` | `{break:Ending early!}` | end the cc/ar early and return a message |

### Conditional

// TODO: explain conditionals

// TODO: link to examples/conditionals.md

| **Function** | **Example** | **Description** |
| - | - | - |
| `{if(condition comparison op condition):then\|else}` | `{if({user.name}==imdarkdiamond):Hello Dark\|You're not dark!}` | TODO description |
| `{any}` | `{any}` | TODO description |
| `{all}` | `{all}` | TODO description |

TODO: any & all ^

### Storage

Storage is not persistent and only lives during the cc/ar execution. Persistent storage will be provided in a future update.

| **Function** | **Example** | **Description** |
| - | - | - |
| `{=(name):value}` | `{=(hello):world}` | assign "world" to the "hello" variable |
| `{name}` | `{hello}` | get the "hello" variable (if it exists) |

### Arrays

Arrays are defined as `value0|value1|value2|...`.

| **Function** | **Example** | **Description** |
| - | - | - |
| `{arrayname[i]}` | `{args[0]}` `{args[2]}` `{myarray[0]}` | get the element at an index from an array |
| `{contains(value):array}` | `{contains(hello):hello\|world}` -> `true` | check an array for an element |

### Util

| **Function** | **Example** | **Description** |
| - | - | - |
| `{len:}` | `{len:test\|test1\|test2}` -> `3` `{len:string length}` -> `13` | get the length of an array or string |
| `{join():}` | `{join( ):hello\|world}` -> `hello world` `{join(_):hello\|world}` -> `hello_world` | join elements of an array into a string |
| `{replace(replace\|with):}` | `{replace(hello\|bye):hello world}` -> `bye world` | replace part of a string with another string |
| `{uppercase:}` | `{uppercase:hello world}` -> `HELLO WORLD` | make a string uppercase |
| `{lowercase:}` | `{lowercase:HELLO WORLD}` -> `hello world` | make a string lowercase |

### Comments

| **Function** | **Example** | **Description** |
| - | - | - |
| `{#:}` | `{#:what a cool comment}` | write a comment for future reference. will be ommited and never shown to the user |

### Math

| **Function** | **Example** | **Description** |
| - | - | - |
| `{add:}` | `{add:5+5}` | add two numbers. to subtract use a negative number |
| `{round:}` | `{round:5.5}` | round a number |
| `{floor:}` | `{floor:5.5}` | round down a number |
| `{range:}` | `{range5\|5}` | generate a random number in the range |
