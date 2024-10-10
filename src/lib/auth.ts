import { NextAuthOptions, getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import LinkedInProvider from 'next-auth/providers/linkedin';
import GitHubProvider from 'next-auth/providers/github';

interface Profile {
	name: string;
	email: string;
	picture: string;
}

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID;
const TWITTER_CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET;
const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},

	providers: [
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID ?? '',
			clientSecret: GOOGLE_CLIENT_SECRET ?? '',
		}),
		TwitterProvider({
			clientId: TWITTER_CLIENT_ID ?? '',
			clientSecret: TWITTER_CLIENT_SECRET ?? '',
			//version: '2.0', // opt-in to Twitter OAuth 2.0
		}),
		LinkedInProvider({
			clientId: LINKEDIN_CLIENT_ID ?? '',
			clientSecret: LINKEDIN_CLIENT_SECRET ?? '',
			client: { token_endpoint_auth_method: 'client_secret_post' },
			//scope: 'r_liteprofile r_emailaddress',
			issuer: 'https://www.linkedin.com',
			userinfo: {
				url: 'https://api.linkedin.com/v2/userinfo',
			},
			//tokenUri: 'https://www.linkedin.com/oauth/v2/accessToken',
			wellKnown:
				'https://www.linkedin.com/oauth/.well-known/openid-configuration',
			authorization: {
				url: 'https://www.linkedin.com/oauth/v2/authorization',
				params: {
					scope: 'profile email openid',
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},

			token: {
				url: 'https://www.linkedin.com/oauth/v2/accessToken',
			},
			jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
			async profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					firstname: profile.given_name,
					lastname: profile.family_name,
					email: profile.email,
					image: profile.picture,
				};
			},
		}),
		GitHubProvider({
			clientId: GITHUB_CLIENT_ID ?? '',
			clientSecret: GITHUB_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ account, profile }) {
			if (!profile?.email) {
				throw new Error('No profile');
			}

			await prisma.user.upsert({
				where: {
					email: profile.email,
				},
				create: {
					email: profile.email,
					name: profile.name,
					// @ts-expect-error
					image: profile.picture,
				},
				update: {
					name: profile.name,
					// @ts-expect-error
					image: profile.picture,
				},
			});
			return true;
		},
		redirect() {
			return '/dashboard';
		},
	},
};

export const getAuthSession = () => getServerSession(authOptions);
