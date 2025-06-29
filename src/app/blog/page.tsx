import type { Metadata } from 'next'
import Navbar from './Navbar'
import BlogPost from './BlogPost';

export const metadata: Metadata = {
  title: 'Nick\'s Portfolio',
  icons: {
    icon: "appicon.png"
  }
}

export default function Home() {
  return (
    <main className="scroll-smooth bg-slate-200">
        <Navbar/>   
        <BlogPost 
            title="The Art of Cutting Weight"
            contentFile="blog_content/weightloss.html"
            audience="Beginner"
            category="Fitness and Health"
            tags={['Diet', 'Body Building']}
        />
    </main>
  );
}