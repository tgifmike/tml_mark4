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