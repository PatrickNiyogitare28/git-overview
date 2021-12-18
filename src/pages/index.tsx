import Slide from "./slides";
import Head from "next/head";
import {Main} from 'next/document';
export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <Head>
        <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@700&family=Poppins:wght@100;200&family=Roboto:wght@100&display=swap" rel="stylesheet" /> */}

<link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@700&family=Poppins:wght@100;200&family=Roboto:wght@100&display=swap" rel="stylesheet" />
   </>
      </Head>
      <main>
        <Slide />
      </main>
    </div>
  )
}
