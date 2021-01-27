import "twin.macro";
import Image from "next/image";

import { ListItem } from "./styles";
import { Tag } from "@/components/Tag";
import { Experience } from "@/services/api";
import { AwardIcon } from "@/components/Icons";
import { ConditionalWrap } from "../ConditionalWrap";

export const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  const organizationPicture = experience.organizations.filter(
    (org) => org?.picture !== undefined || org?.picture !== null,
  );

  return (
    <div key={experience.id} tw=" p-4 flex items-start justify-start">
      <div tw="mr-2">
        {organizationPicture.length > 0 && organizationPicture[0]?.picture ? (
          <Image
            src={organizationPicture[0].picture as string}
            width={50}
            height={50}
            layout="fixed"
            tw="rounded-full"
          />
        ) : (
          <span tw="w-12 h-12 flex items-center justify-center rounded-full text-2xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white">
            {experience.category === "awards" ? (
              <AwardIcon />
            ) : (
              experience.name.substring(0, 1)
            )}
          </span>
        )}
      </div>
      <div tw="w-full">
        <p tw="dark:text-gray-300">{experience.name}</p>
        <p>
          <ConditionalWrap
            condition={Boolean(experience.fromMonth && experience.fromYear)}
          >
            <span tw="text-gray-600 text-sm dark:text-gray-300">
              {experience.fromMonth} {experience.fromYear}
            </span>
          </ConditionalWrap>
          <span tw="text-gray-600 text-sm dark:text-gray-300">
            {experience.toMonth && experience.toYear
              ? " - " + experience.toMonth + " " + experience.toYear
              : " - Current"}
          </span>
        </p>

        <div tw="mt-2">
          {experience.responsibilities &&
            experience.responsibilities.map((responsibility) => (
              <ListItem>{responsibility}</ListItem>
            ))}
        </div>
        <Tag>{experience.category}</Tag>
      </div>
    </div>
  );
};
