import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="content">
            <main className="grid h-screen min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
              <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Gxo back home
                  </Link>
                  <a
                    href="mailto:info@test.it"
                    className="text-sm font-semibold text-white"
                  >
                    Contact support
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}