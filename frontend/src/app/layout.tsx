import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ControllerRouter } from '@/components';
import { AuthProvider } from '@/context/authContext';

const poppins = Poppins({ subsets: [ 'latin' ], weight: ['200', '400', '500', '700', '800','900'] });

export const metadata: Metadata = {
  title: "TV Vidatel",
  description: "Visualização de cameras internas da Vidatel."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <main>
          <AuthProvider>
            <ControllerRouter>
              {children}
            </ControllerRouter>

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
