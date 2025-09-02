import { defineConfig } from "vitepress"
import llmstxt from "vitepress-plugin-llms"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: 'src',

    vite: {
		plugins: [llmstxt({ ignoreFiles: ["changelogs/*", "changelogs/*/*"],  })]
	},

    title: "Arcane.bot",
    description: "Documentation and setup guide for Arcane.bot",

    head: [
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],

    cleanUrls: true,

    appearance: 'dark',

    themeConfig: {
        logo: "/rounded-logo.png",

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Add bot", link: "https://arcane.bot/invite" },
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
		            {
		                text: "Premium",
		                link: "/premium",
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
	                    link: "/plugins/roles/placeholder",
	                    collapsed: true
	                },
	                {
	                    text: "Youtube Notifications",
	                    link: "/plugins/youtube"
	                },
	                {
	                    text: "Custom Commands",
	                    link: "/plugins/custom-commands/placeholder",
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
            	text: 'Changelogs',
            	link: `/changelogs/`
            }
        ],

        outline: {
            level: 1,
        },

        footer: {
            copyright: 'Copyright © 2025 Privy.gg LLC'
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
