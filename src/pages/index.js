/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import { signIn, signOut, useSession } from "next-auth/client"

export default function Home() {
  const [session, loading] = useSession()
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen  bg-black overflow-hidden'
      style={{
        backgroundImage:
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)",
        "background-repeat": "no-repeat",
      }}
    >
      <Head>
        <title>Notflix. A Netflix Clone</title>
        <meta
          name='description'
          content='Notflix is a Netflix clone built using Next.js and Tailwind by Kellen Bolger'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex justify-between w-full px-12 py-10'>
        <div>
          <img className='h-[65px] w-auto ' src='/notflix.png' alt='notflix' />
        </div>
        <div>
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white text-lg px-6 py-2 rounded'
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white text-lg px-6 py-2 rounded'
            >
              Sign Out
            </button>
          )}
        </div>
      </header>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center '>
        <h1 className='text-5xl font-bold text-white max-w-lg'>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className='text-2xl text-white mt-4 mb-8'>
          Watch anywhere. Cancel anytime.
        </h2>
        <p className='text-white'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='flex mt-4 '>
          <input
            placeholder='Email address'
            className='bg-white p-4 w-[40vw] max-w-[400px]'
          />
          <button className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white  text-[1.625rem] px-8 '>
            Get Started
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
