import Hero from "@/components/Home/Hero";
import BlogGames from "@/components/Home/BlogGames";
import MoviesBooks from "@/components/Home/MoviesBooks";
import { LatestBlogs } from "@/components/Home/LatestBlogs";

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogGames />
      <MoviesBooks />
      <LatestBlogs />
    </main>
  );
}
