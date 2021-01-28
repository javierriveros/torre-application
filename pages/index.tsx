import "twin.macro";
import * as React from "react";
import { useRouter } from "next/router";

import Logo from "@/components/Logo";
import { Flex } from "@/components/utils";
import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { MainSubtitle, MainTitle, SearchInput } from "@/components/Home";

export default function HomePage() {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = React.useState("");
  const redirect = async (route: string) => await push(`${route}?term=${searchTerm}`);
  const onSubmitForm = async () => {
    await redirect(`/jobs`);
  };

  const onSearchPeople = async () => {
    if (isInvalid()) return;
    await redirect(`/people`);
  };

  const isInvalid = () => searchTerm.length === 0 || searchTerm.split(" ").join("").length === 0;

  return (
    <Layout>
      <Flex
        center
        tw="flex-col w-full bg-gray-800 py-6 md:py-8 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/torre-technologies-co/image/upload/q_auto,c_fit,w_2000/v1593109931/dev/landing/uqngfnzme7cvvfovw8aw.jpg')",
        }}
      >
        <div tw="max-w-4xl text-center">
          <Logo tw="mx-auto w-36 md:w-60 mt-4" />

          <MainTitle>Torre</MainTitle>
          <MainSubtitle>The new professional network for remote and flexible work</MainSubtitle>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (isInvalid()) return;

              await onSubmitForm();
            }}
          >
            <SearchInput
              type="text"
              placeholder="Search for a remote job or a friend"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Flex centerH tw="gap-2">
              <Button as="button" type="submit">
                Search jobs
              </Button>
              <Button as="button" type="button" onClick={onSearchPeople} secondary>
                Search people
              </Button>
            </Flex>
          </form>
        </div>
      </Flex>
    </Layout>
  );
}
