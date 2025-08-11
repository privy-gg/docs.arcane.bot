---
outline: deep
---

# Auto Responders Setup

::: tip
Setup is done on the [dashboard](../../core/dashboard).
:::

## Creating an auto responder

You can create an auto responder on the [dashboard](../../core/dashboard).

TODO: Video & other settings

### Keyword Matching

Keywords can be an individual word, or multiple words.

Auto responders support keywords up to 50 characters in length and a max of 10 keywords per auto responder.

Examples:
- "hello"
- "hello world"
- "this is a long sentence"

#### Types

Auto responders can match on your keywords with different modes.

##### Contains

Contains checks for the keyword anywhere in the message.

| Keyword | Input | Matched |
| - | - | - |
| good | goodbye world | ✅ |
| good | good job | ✅ |
| good | good | ✅ |
| good | the movie was very good! | ✅ |
| good | hello world | ❌ |

##### Strict

Strict will only match keywords if it is found in the message. Any characters around the keyword will not match.

| Keyword | Input | Matched |
| - | - | - |
| good | goodbye world | ❌ |
| good | good job | ✅ |
| good | good | ✅ |
| good | the movie was very good! | ❌ |
| good | hello world | ❌ |

##### Exact

Exact will only match if the entire message is an exact match.

| Keyword | Input | Matched |
| - | - | - |
| good | goodbye world | ❌ |
| good | good job | ❌ |
| good | good | ✅ |
| good | the movie was very good! | ❌ |
| good | hello world | ❌ |
| i love arcane | i love arcane | ✅ |

##### Starts With

Starts with will only match if the message starts with the keyword

| Keyword | Input | Matched |
| - | - | - |
| good | goodbye world | ✅ |
| good | good job | ✅ |
| good | good | ✅ |
| good | the movie was very good! | ❌ |
| good | hello world | ❌ |

##### Ends With

Ends with will only match if the message ends with the keyword

| Keyword | Input | Matched |
| - | - | - |
| good | goodbye world | ❌ |
| good | good job | ❌ |
| good | good | ✅ |
| good | the movie was very good! | ❌ |
| good | hello world | ❌ |
| arcane | i love arcane | ✅ |

### Regex Matching

You can also configure auto responders to be triggered by regex patterns. We use the **Rust** flavor of regex. You can test and write your regex patterns with [Rustexp](https://rustexp.lpil.uk).

Auto responders support regex patterns up to 250 characters in length and a max of 1 regex pattern per auto responder.

### Limits

| **Tier** | **Total AR** |
| - | - |
| Free | 3 |
| Premium | 25 |

## Updating an auto responder

Updating a responder is done on the same page as creating an auto responder.

## Deleting an auto responder

Deleting a responder is done on the same page as creating an auto responder. Please note that deleting an auto responder cannot be undone so save your responses in case you need them in the future.
