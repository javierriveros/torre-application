import create from "zustand";

import { combine } from "zustand/middleware";

type NotDefined = Record<string, unknown>;

export const useJobsFilters = create(
  combine(
    {
      status: null, // or "closed"
      location: null,
      type: null,
      remote: null,
      organization: null,
      role: null,
    },
    /**
     * I'm not proud of this either but I needed a way to verify if the variable
     * wasn't undefined or null
     */
    (set, get) => ({
      setFilters: (name: string, value: string) => set((state) => ({ ...state, [name]: value })),
      getFilters: () =>
        [
          {
            ...(((get().status as unknown) as NotDefined) && {
              status: { code: get().status },
            }),
          },
          {
            ...(((get().location as unknown) as NotDefined) && {
              location: { term: get().location },
            }),
          },
          {
            ...(((get().type as unknown) as NotDefined) && {
              type: { code: get().type },
            }),
          },
          {
            ...(((get().remote as unknown) as NotDefined) && {
              remote: { term: get().remote },
            }),
          },
          {
            ...(((get().organization as unknown) as NotDefined) && {
              organization: { term: get().organization },
            }),
          },
          {
            ...(((get().role as unknown) as NotDefined) && {
              "skill/role": {
                text: get().role,
                experience: "potential-to-develop",
              },
            }),
          },
        ].filter((f: any) => JSON.stringify(f) !== "{}"),
    })
  )
);

export const useFiltersForJobsQuery = create((set: any) => ({
  and: [],
  setAnd: (and: any) => set({ and }),
}));
