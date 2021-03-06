/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import Promo from "../components/Promo";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div
      className='flex flex-col items-center justify-center  overflow-hidden bg-black '
      style={{
        backgroundImage:
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)",

        "background-size": "fill",
      }}>
      <Head>
        <title>Notflix. A Netflix Clone</title>
        <meta
          name='description'
          content='Notflix is a Netflix clone built using Next.js and Tailwind by Kellen Bolger'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex justify-between w-full px-12 py-6'>
        <div>
          <img className='h-[50px] w-auto ' src='/notflix.png' alt='notflix' />
        </div>
        <div>
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white text-lg font-semibold px-5 py-1 rounded'>
              Sign In
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white text-md font-semibold px-5 py-1 rounded'>
              Sign Out
            </button>
          )}
        </div>
      </header>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center  pt-[9rem] pb-[11rem]  '>
        <h1 className='text-5xl font-semibold text-white max-w-xl'>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className='text-2xl text-white mt-4 mb-8'>
          Watch anywhere. Cancel anytime.
        </h2>
        <p className='text-white text-[1.1rem] font-medium'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='flex mt-4 has-tooltip'>
          <input
            placeholder='Email address'
            className='bg-white p-4 w-[40vw] max-w-[400px]'
          />
          <span className='tooltip rounded shadow-lg p-1 bg-red-700 text-white -mt-8'>
            Authorization Coming Soon. Click &quot;Get Started&quot; to see
            logged-in view without entering email.
          </span>
          <Link href='/dashboard'>
            <a className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white  text-[1.625rem] px-8 '>
              Get Started
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          </Link>
        </div>
      </main>
      <Promo />
      <FAQ />
      <div className=' flex flex-col items-center justify-center bg-black w-[100%]'>
        <p className='text-white font-medium'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='flex mt-4 mb-[5rem] has-tooltip '>
          <input
            placeholder='Email address'
            className='bg-white p-4 w-[40vw] max-w-[400px] '
          />
          <span className='tooltip rounded shadow-lg p-1 bg-red-700 text-white -mt-8'>
            Authorization Coming Soon. Click &quot;Get Started&quot; to see
            logged-in view without entering email.
          </span>
          <Link href='/dashboard'>
            <a className='flex items-center bg-blue-700 hover:bg-blue-600 transition-all text-white  text-[1.625rem] px-8 '>
              Get Started
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
