import "twin.macro";
import Image from "next/image";

import { Tag } from "@/components/Tag";
import { Flex } from "@/components/utils";
import { AwardIcon } from "@/components/Icons";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { ExperienceAvatar, ListItem, TextMuted } from "./styles";
import { Experience } from "@/services/api";

export const ExperienceCard: React.FC<{
  experience: Experience;
}> = ({ experience }) => {
  const organizationPicture = experience?.organizations?.filter(
    (org) => org?.picture !== undefined || org?.picture !== null
  );

  return (
    <Flex alignItemsStart justifyStart tw="p-4">
      <div tw="mr-2">
        {organizationPicture.length > 0 && organizationPicture[0]?.picture ? (
          <Image
            src={organizationPicture[0].picture as string}
            width={50}
            height={50}
            layout="fixed"
            tw="rounded"
          />
        ) : (
          <ExperienceAvatar>
            {experience.category === "awards" ? <AwardIcon /> : experience.name.substring(0, 1)}
          </ExperienceAvatar>
        )}
      </div>
      <div tw="w-full">
        <p tw="dark:text-gray-300">{experience.name}</p>
        {experience?.organizations?.length > 0 && <Tag>{experience.organizations[0]?.name}</Tag>}
        <p>
          <ConditionalWrap condition={Boolean(experience.fromMonth && experience.fromYear)}>
            <TextMuted>
              {experience.fromMonth} {experience.fromYear}
            </TextMuted>
          </ConditionalWrap>

          <TextMuted>
            {experience?.toMonth && experience?.toYear
              ? " - " + experience?.toMonth + " " + experience?.toYear
              : " - Current"}
          </TextMuted>
        </p>

        <div tw="mt-2">
          {experience.responsibilities &&
            experience?.responsibilities?.map((responsibility: string, index: number) => (
              <ListItem key={`responsibility-${index}`}>{responsibility}</ListItem>
            ))}
        </div>
      </div>
    </Flex>
  );
};
