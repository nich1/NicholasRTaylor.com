import type { Metadata } from 'next'
import Navbar from './Navbar'
import BlogPost from './BlogPost';
import BlogCard from './BlogCard';
import BlogList from './BlogList';

export const metadata: Metadata = {
  title: 'Nick\'s Portfolio',
  icons: {
    icon: "appicon.png"
  }
}

export default function Home() {
  return (
    <main className="scroll-smooth bg-slate-200 min-h-screen">
        <Navbar/>   
        <BlogList/>
        
        
    </main>
  );
}