import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: 'src',

    title: "Arcane.bot",
    description: "Documentation and setup guide for Arcane.bot",

    head: [
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],

    cleanUrls: true,

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
            // { icon: "github", link: "https://github.com/privy-gg/" }
        ],

        sidebar: [
        	{
         		text: "Introduction",
           		items: [
		            {
		                text: "Get Started",
		                link: "get-started",
		            },
		            {
		                text: "Frequently Asked",
		                link: "frequently-asked-questions",
		            },
		            {
		                text: "Premium",
		                link: "premium",
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
								link: "core/commands/list"
							},
							{
								text: "Command Settings",
								link: "core/commands/settings"
							}
						],
						collapsed: true,
		            },
		            {
		                text: "Dashboard",
		                link: "core/dashboard",
		            },
              	]
          	},
            {
                text: "Plugins",
                items: [
	                {
	                    text: "Leveling",
						link: "plugins/leveling",
	                    items: [
	                        { text: "Commands", link: "/reference/command-reference" },
	                        { text: "Phishing Scams", link: "/reference/phishing-scams" },
	                        { text: "Verification Problems", link: "/reference/verification-faq" },
	                        { text: "FAQ", link: "/reference/faq" },
	                    ],
	                    collapsed: true,
	                },
	                {
	                    text: "Moderation",
						link: "plugins/moderation",
	                    items: [
	                        { text: "Auto-Moderator", link: "plugins/moderation/auto-mod" },
	                        { text: "Commands", link: "plugins/moderation/commands" },
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Role Management",
	                    items: [
	                        { text: "Auto Roles", link: "plugins/roles/auto-roles" },
	                        { text: "Reaction Roles", link: "plugins/roles/reaction-roles" }
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Youtube Notifications",
	                    link: "plugins/youtube"
	                },
	                {
	                    text: "Custom Commands",
	                    items: [
	                        { text: "Server Analytics", link: "/logging/server-analytics" },
	                        { text: "Audit Log", link: "/logging/audit-log" }
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Auto Responders",
	                    items: [
	                        { text: "Server Analytics", link: "/logging/server-analytics" },
	                        { text: "Audit Log", link: "/logging/audit-log" }
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Welcomer/Goodbye",
	                    link: "plugins/welcomer",
	                    collapsed: true
	                },
	                {
	                    text: "Logging",
	                    items: [
	                        { text: "Server Analytics", link: "/logging/server-analytics" },
	                        { text: "Audit Log", link: "/logging/audit-log" }
	                    ],
	                    collapsed: true
	                },
	                {
	                    text: "Counters",
	                    items: [
	                        { text: "Server Analytics", link: "/logging/server-analytics" },
	                        { text: "Audit Log", link: "/logging/audit-log" }
	                    ],
	                    collapsed: true
	                },
                ]
            },
           	{
            	text: "Tag System",
             	items: [
		            {
		                text: "Introduction",
		                link: "get-started",
		            },
		            {
		                text: "Premium",
		                link: "premium",
		            },
                ],
                collapsed: true,
            },

        ],

        outline: {
            level: 1,
        },

        footer: {
            copyright: 'Copyright © 2021-2025 Privy.gg LLC'
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
