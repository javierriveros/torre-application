import * as React from "react";
import tw from "twin.macro";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { JobCard } from "@/components/JobCard";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <Layout>
      <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-12">
        <Sidebar />

        <section tw="col-span-1 md:col-span-9 px-4 pt-8">
          <h2 tw="text-2xl font-bold dark:text-white">Showing 46 jobs</h2>
          <div tw="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-4">
            {[1, 2, 3, 4, 5, 6].map((l) => (
              <JobCard
                key={l}
                image={"https://github.com/javierriveros.png"}
                title={"UX /UI Designer"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis saepe totam ut. Assumenda, commodi! Sapiente estdolore nihil repellat possimus error..."
                }
                tags={[
                  { name: "Full time", experience: "potential-to-develop" },
                  { name: "Full time", experience: "potential-to-develop" },
                  { name: "Full time", experience: "potential-to-develop" },
                  { name: "Full time", experience: "potential-to-develop" },
                  { name: "Full time", experience: "potential-to-develop" },
                ]}
                link={"#"}
              />
            ))}
          </div>
          <div tw="mb-8 mt-4 text-center">
            <Button as={"button"}>Load more</Button>
          </div>
        </section>
      </section>
    </Layout>
  );
}
