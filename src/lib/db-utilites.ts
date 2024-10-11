import prisma from "@/lib/prisma";

//get full list of books
export async function getBooks() {
	const books = await prisma.books.findMany({});
	return books;
}

//full list of movies
export async function getMovies() {
	const movies = await prisma.movies.findMany({});
	return movies;
}

//get blog by slug
export async function getPost(slug: string) {
	const post = await prisma.post.findFirst({
		include: {
			authorName: true,
		},
		where: {
			slug: slug,
		},
	});
	return post;
}

//get blogs
export async function getPosts() {
	const posts = await prisma.post.findMany({
		include: {
			authorName: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
	return posts;
}

//pagination function
export async function getPaginationPosts(page: number, per_page: number) {
	const skip: number = (page - 1) * per_page;

	const posts = await prisma.post.findMany({
		include: {
			authorName: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
		take: per_page,
		skip: skip,
	});
	return posts;
}