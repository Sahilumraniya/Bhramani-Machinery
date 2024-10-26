import NavBar from './components/NavBar'
import Footer from './components/footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhramani Pharma Machinery',
  description: 'Transforming Pharmaceutical Manufacturing | Bhramani Machinery\nExperience a revolution in pharmaceutical manufacturing with Bhramani Machinery. Our innovative solutions powered by cutting-edge technology transform manufacturing processes, enhancing efficiency and productivity. Explore our range of industry-leading products today.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
