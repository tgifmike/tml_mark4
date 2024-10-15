import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.themanagerlife.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://www.themanagerlife.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		// {
		// 	url: 'https://www.themanagerlife.com/all-blogs',
		// 	lastModified: new Date(),
		// 	changeFrequency: 'weekly',
		// 	priority: 0.4,
		// },
		{
			url: 'https://www.themanagerlife.com/all-blogs',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}
