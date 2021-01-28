import "twin.macro";
import * as React from "react";
import { useRouter } from "next/router";

import Logo from "@/components/Logo";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";

export default function Home() {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <Layout>
      <div
        tw="flex justify-center items-center flex-col w-full bg-gray-800 py-6 md:py-8 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/torre-technologies-co/image/upload/q_auto,c_fit,w_2000/v1593109931/dev/landing/uqngfnzme7cvvfovw8aw.jpg')",
        }}
      >
        <div tw="max-w-4xl text-center">
          <Logo tw="mx-auto w-36 md:w-60 mt-4" />

          <h1 tw="text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight text-torre-500 mb-4 mt-2">
            Torre
          </h1>
          <h2 tw="text-3xl sm:text-3xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-200 my-4">
            The new professional network for remote and flexible work
          </h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await push(`/jobs?term=${searchTerm}`);
            }}
          >
            <input
              type="text"
              placeholder="Search for a remote job"
              tw="mt-1 focus:ring-gray-800 block max-w-sm focus:max-w-md mx-auto text-center w-full shadow-sm rounded-full transition-all duration-300 py-4 text-base placeholder-gray-300 focus:placeholder-gray-600 dark:bg-gray-800 dark:placeholder-gray-600 focus:dark:placeholder-gray-400 dark:text-black focus:dark:bg-white border-0 focus:border-0 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button as="button" type="submit">
              Continue
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
