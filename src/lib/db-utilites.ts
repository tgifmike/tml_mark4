import prisma from "@/lib/prisma";

//get full list of books
export async function getBooks() {
	const books = await prisma.books.findMany({});
	return books;
}

export async function getMovies() {
	const movies = await prisma.movies.findMany({});
	return movies;
}