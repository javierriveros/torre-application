import Image from "next/image";
import "twin.macro";

import { split } from "@/utils";
import { Flex } from "@/components/utils";
import { Education, Job, Project, Award } from "@/services/api";
import { TorreButton } from "@/components/Button";
import { ExperienceCard } from "./ExperienceCard";
import { Collapsible } from "@/components/Collapsible";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { SocialIcon, VerifiedIcon } from "@/components/Icons";
import {
  Card,
  ImageCard,
  LanguageCode,
  LanguageFluency,
  LanguageName,
  LanguagesContainer,
  ListItem,
  Location,
  SectionTitle,
  SocialLink,
  UserHeadline,
  Username,
} from "./styles";

export function Genoma({ data }: { data: any }) {
  return (
    <>
      <Flex tw="col-span-1" centerV col>
        <ConditionalWrap condition={data.person?.pictureThumbnail}>
          <ImageCard style={{ zIndex: 2 }}>
            <Image
              src={data.person.pictureThumbnail}
              alt={`Picture of ${data.person.name}`}
              tw="inline-block h-24 w-24 rounded-full"
              width={150}
              layout="intrinsic"
              height={150}
            />
          </ImageCard>
        </ConditionalWrap>
        <Card tw="-top-8 pt-8 mb-1">
          <Username>
            {data.person.name} {data.person.verified && <VerifiedIcon />}
          </Username>
          <Flex centerH tw="gap-2 mb-2" wrap={true}>
            {data.person.links.map((link: any) => (
              <SocialLink
                href={link.address}
                target="_blank"
                rel="noreferrer noopener"
                key={link.id}
              >
                <SocialIcon name={link.name} />
              </SocialLink>
            ))}
          </Flex>
          <ConditionalWrap condition={Boolean(data.person?.location)}>
            <Location tw="mb-2">{data.person.location.name}</Location>
          </ConditionalWrap>
          <UserHeadline>{data.person.professionalHeadline}</UserHeadline>
          <TorreButton
            href={`https://bio.torre.co/en/${data.person.publicId}`}
            target="_blank"
            rel="noreferrer noopener"
            tw="w-full flex mt-2"
          >
            Signal
          </TorreButton>
        </Card>
        <ConditionalWrap condition={Boolean(data.interests)}>
          <Card>
            <h2 tw="font-semibold text-xl mb-2 dark:text-white">Skills s/he wants to develop:</h2>

            <ul>
              {data.interests?.map((interest: any) => (
                <ListItem key={interest.id}>{interest.name}</ListItem>
              ))}
            </ul>
          </Card>
        </ConditionalWrap>

        <ConditionalWrap condition={Boolean(data?.strengths)}>
          <Card>
            <h2 tw="font-semibold text-xl mb-2 dark:text-white">Strengths</h2>

            <ul>
              {data?.strengths?.map((strength: any) => (
                <ListItem key={strength.id}>{strength.name}</ListItem>
              ))}
            </ul>
          </Card>
        </ConditionalWrap>
      </Flex>

      <div tw="col-span-2">
        <Card>
          <SectionTitle>About {data.person.name}</SectionTitle>
          <Collapsible text={data.person.summaryOfBio} />
        </Card>

        <Card>
          <SectionTitle>Jobs</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.jobs)}>
              <>
                {data.jobs?.map((job: Job) => (
                  <ExperienceCard key={job.id} experience={job} />
                ))}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <SectionTitle>Education</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.education)}>
              <>
                {data.education?.map((education: Education) => (
                  <ExperienceCard key={education.id} experience={education} />
                ))}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <SectionTitle>Projects</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.projects)}>
              <>
                {data.projects?.map((project: Project) => (
                  <ExperienceCard key={project.id} experience={project} />
                ))}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <SectionTitle>Awards</SectionTitle>

          <div tw="divide-y divide-gray-300 dark:divide-gray-500">
            <ConditionalWrap condition={Boolean(data?.awards)}>
              <>
                {data.awards?.map((award: Award) => (
                  <ExperienceCard key={award.id} experience={award} />
                ))}
              </>
            </ConditionalWrap>
          </div>
        </Card>

        <Card>
          <h2 tw="font-semibold text-xl mb-2 dark:text-white">Languages</h2>

          <LanguagesContainer>
            {data.languages &&
              data.languages.map((lang: any) => (
                <Flex key={lang.code} centerV justifyStart tw="p-2">
                  <LanguageCode>{lang.code}</LanguageCode>
                  <p tw="px-2">
                    <LanguageName>{lang.language}</LanguageName>
                    <LanguageFluency>{split(lang.fluency)}</LanguageFluency>
                  </p>
                </Flex>
              ))}
          </LanguagesContainer>
        </Card>
      </div>
    </>
  );
}
