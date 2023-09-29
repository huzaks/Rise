import MenuMD from '@/components/MenuMD'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'


export const metadata = {
  title: 'Rise',
  description: 'Notre application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-gradient-to-b from-white to-slate-400">
        <MenuMD />
        <Sidebar />
        {children}
        </body>
    </html>
  )
}
