import { defineConfig, HeadConfig } from "vitepress"
import { ComponentType } from "./components";
import { access, constants } from "node:fs/promises";
import { join } from "node:path";

const BASE_URL = process.env.CF_PAGES_BRANCH === 'main' ? 'https://docs.arcane.bot' : process.env.CF_PAGES_URL || 'http://localhost:5173';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	async transformHead({ pageData, siteConfig, page }) {
		const head: HeadConfig[] = [];

		const url = `${BASE_URL}/${pageData.relativePath.replace('.md', '')}`;

		let og = pageData.frontmatter.ogImage;

		// Verify the image exists
		if (og) {
			try {
				await access(join(siteConfig.srcDir, 'public', og), constants.F_OK);
			} catch {
				throw new Error(`Failed to resolve og image ${og} from ${page}`);
			}
		}

		let media = og ? [{
			type: ComponentType.MediaGallery,
			items: [
				{
					media: {
						url: `${BASE_URL}${pageData.frontmatter.ogImage}`
					}
				}
			]
		}, {
			type: ComponentType.Separator,
			spacing: 1,
		}] : [];

		head.push([
			'script',
			{
				id: 'discord:component-embed',
				type: 'application/json'
			},
			JSON.stringify({
				component: {
					type: ComponentType.Container,
					accent_color: 0x41b2b0,
					components: [
						{
							type: ComponentType.TextDisplay,
							content: `### [${pageData.title ? `${pageData.title} | Arcane.bot` : 'Arcane.bot'}](${url})\nDocumentation and setup guide for Arcane.bot`
						},
						...media,
						{
							type: ComponentType.ActionRow,
							components: [
								{
									type: ComponentType.Button,
									style: 5,
									label: 'Visit page',
									url,
								},
								{
									type: ComponentType.Button,
									style: 5,
									label: 'Dashboard',
									url: `${BASE_URL}/core/dashboard`,
								},
								{
									type: ComponentType.Button,
									style: 5,
									label: 'FAQ',
									url: `${BASE_URL}/frequently-asked-questions`,
								}
							]
						}
					]
				}
			})
		]);

		return head;
	},

    srcDir: 'src',

    title: "Arcane.bot",
	description: "Documentation and setup guide for Arcane.bot",
	lang: 'en-US',

	head: [
		['link', { rel: "shortcut icon", href: "/favicon.ico" }],
        ['meta', { property: 'theme-color', content: '#41b2b0' }]
    ],

    cleanUrls: true,

    appearance: 'dark',

    themeConfig: {
        logo: "/rounded-logo.png",

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
			{ text: "Add bot", link: "https://arcane.bot/invite" },
            { text: "Support Server", link: "https://discord.gg/arcane" },
            { text: "Dashboard", link: "https://arcane.bot/dashboard" }
        ],

        search: {
            provider: "local"
        },

        socialLinks: [
            { icon: "discord", link: "https://discord.gg/arcane" },
            { icon: "x", link: "https://x.com/discordarcane" },
            { icon: "github", link: "https://github.com/privy-gg/docs.arcane.bot" }
		],

		notFound: {
			quote: 'The page you are requesting could not be found',
		},

		sidebar: [
        	{
         		text: "Introduction",
           		items: [
		            {
		                text: "Get Started",
		                link: "/get-started",
		            },
		            {
		                text: "Frequently Asked",
		                link: "/frequently-asked-questions",
		            },
             	]
         	},
          {
          		text: "Premium",
            		items: [
		            {
		                text: "Premium",
		                link: "/premium",
		            },
		            {
		                text: "Custom Bots",
		                link: "/custom-bots",
		            },
              	]
          	},
          	{
          		text: "Core",
            		items: [
		            {
		                text: "Commands",
		                items: [
							{
								text: "Command list",
								link: "/core/commands/list"
							},
							{
								text: "Command Settings",
								link: "/core/commands/settings"
							}
						],
						collapsed: true,
		            },
		            {
		                text: "Dashboard",
		                link: "/core/dashboard",
		            },
              	]
          	},
            {
                text: "Plugins",
                items: [
	                {
	                    text: "Leveling",
	                    items: [
							{ text: "Introduction", link: "/plugins/leveling/" },
							{
								text: "Setup",
								items: [
									{ text: "XP Options", link: "/plugins/leveling/setup/xp-options" },
									{ text: "Levelup Message", link: "/plugins/leveling/setup/levelup-message" },
									{ text: "Role Rewards", link: "/plugins/leveling/setup/role-rewards" },
									{ text: "XP Boosters", link: "/plugins/leveling/setup/xp-boosters" },
									{ text: "Highlights", link: "/plugins/leveling/setup/highlights" },
									{ text: "XP Management", link: "/plugins/leveling/setup/xp-management" },
									{ text: "Leaderboard", link: "/plugins/leveling/setup/leaderboard" },
									{ text: "XP Restrictions", link: "/plugins/leveling/setup/restrictions" },
								]
							},
							{ text: "Rank Card", link: "/plugins/leveling/card" },
							{ text: "XP Management", link: "/plugins/leveling/management" },
	                        { text: "Debugging", link: "/plugins/leveling/debugging" },
	                    ],
	                    collapsed: true,
	                },
	                {
	                    text: "Moderation",
	                    items: [
							{ text: "Introduction", link: "/plugins/moderation/" },
							{ text: "Setup", link: "/plugins/moderation/setup" },
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Role Management",
	                    items: [
							{ text: "Introduction", link: "/plugins/roles/" },
							{
								text: "Setup",
								items: [
									{ text: "Auto Roles", link: "/plugins/roles/setup/auto-roles" },
									{ text: "Reaction Roles", link: "/plugins/roles/setup/reaction-roles" },
								]
							},
	                    ],
	                    collapsed: true,
	                },
	                {
	                    text: "Youtube Notifications",
	                    link: "/plugins/youtube"
	                },
	                {
	                    text: "Custom Commands",
	                    items: [
							{ text: "Introduction", link: "/plugins/custom-commands/" },
							{ text: "Setup", link: "/plugins/custom-commands/setup" },
							{
								text: "Examples",
								link: "/plugins/custom-commands/examples/",
							}
						],
	                    collapsed: true
	                },
	                {
	                    text: "Welcomer/Goodbye",
	                    items: [
							{ text: "Introduction", link: "/plugins/welcomer/" },
							{ text: "Setup", link: "/plugins/welcomer/setup" },
						],
	                    collapsed: true
	                },
	                {
	                    text: "Logging",
	                    items: [
							{ text: "Introduction", link: "/plugins/logging/" },
							{ text: "Setup", link: "/plugins/logging/setup" },
							{ text: "Debugging", link: "/plugins/logging/debugging" },
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Counters",
	                    items: [
	                        { text: "Introduction", link: "/plugins/counters/" },
	                        { text: "Setup", link: "/plugins/counters/setup" },
	                        { text: "Debugging", link: "/plugins/counters/debugging" }
	                    ],
	                    collapsed: true
	                },
                ]
            },

            {
	            text: "Tag System v2",
	            items: [
					{ text: "Reference", link: "/tag-system/reference" },
	            ],
	        },

            {
            	text: 'Changelogs',
            	link: `/changelogs/`
            }
        ],

        outline: {
            level: 1,
		},

		footer: {
            copyright: 'Copyright © 2025-2026 Privy.gg LLC'
        },
    },

    sitemap: {
        hostname: 'https://docs.arcane.bot'
    },

    markdown: {
        container: {
            dangerLabel: '🚨 DANGER'
        }
    }
})
