<script setup>
import { data as changelogs } from '../../.vitepress/changelogs.data.ts'
</script>

# Changelog

Changelogs are posted here from our `#changelog` channel in our [support server](https://discord.gg/arcane).

::: tip
This page includes changelogs from 2023 onward. Older changelogs from the past 7 years are not included to save time on importing and managing them. Older changelogs may not be formatted as nicely as newer changelogs to preserve their original form.
:::

<ul>
  	<li v-for="changelog in changelogs">
    	<a :href="changelog.url">{{ changelog.title }}</a>
   	</li>
</ul>
