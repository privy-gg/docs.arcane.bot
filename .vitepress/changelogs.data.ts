import { createContentLoader } from 'vitepress'

export default createContentLoader('changelogs/*/index.md', {
   	transform(rawData) {
     	return rawData
    		.sort((a, b) => {
				const dateA = new Date(a.frontmatter.date).getTime();
				const dateB = new Date(b.frontmatter.date).getTime();

                return dateB - dateA
            })
        	.map(page => ({
      			title: `${page.frontmatter.title} ${page.frontmatter.date}`,
           		url: page.url,
         	}))
    }
})
