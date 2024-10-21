import Hero from "@/components/Home/Hero";
import BlogGames from "@/components/Home/BlogGames";
import MoviesBooks from "@/components/Home/MoviesBooks";
import { LatestBlogs } from "@/components/Home/LatestBlogs";
import SignInToJoin from "@/components/Home/signInToJoin";
import NewsletterSignUp from "@/components/Newsletter/NewsletterSignUp";

export default function Home() {
  return (
    <main>
      <Hero />
    <NewsletterSignUp />
      <BlogGames />
      <MoviesBooks />
    
      <LatestBlogs />
      <SignInToJoin />
    </main>
  );
}
