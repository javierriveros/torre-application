import "twin.macro";
import { Tag } from "@/components/Tag";

import { JobTitle, JobLocation, JobOwner, JobInfo, JobImageCard } from "./styles";
import { UserCard } from "@/components/Users";
import { LocationIcon } from "@/components/Icons";
import { Section, JobCover } from "@/components/Job";
import { JobSlider } from "@/components/Jobs/styles";
import { JobImage } from "@/components/Jobs/JobImage";
import { JobDetails } from "@/components/Job/JobDetails";
import { ConditionalWrap } from "@/components/ConditionalWrap";

export const Job = ({ data }: { data: any }) => (
  <>
    <JobOwner>
      <UserCard user={data?.owner} tw="md:sticky top-20" />
    </JobOwner>
    <JobInfo>
      <JobCover attachments={data?.attachments} />
      <JobImageCard>
        <JobImage organizations={data?.organizations} width={100} />
      </JobImageCard>
      <div tw="px-8">
        <JobTitle>{data?.objective}</JobTitle>

        <ConditionalWrap condition={data?.strengths?.length > 0}>
          <Section title="Skills required">
            <JobSlider tw="mt-0">
              {data?.strengths?.map((strength: any) => (
                <Tag key={strength.id}>{strength.name}</Tag>
              ))}
            </JobSlider>
          </Section>
        </ConditionalWrap>

        <ConditionalWrap condition={data?.place?.remote}>
          <Section title="Location">
            <JobLocation>
              <LocationIcon tw="text-blue-500" /> {data?.place?.remote && "Remote"}
            </JobLocation>
          </Section>
        </ConditionalWrap>

        <ConditionalWrap condition={data?.details?.length > 0}>
          <Section title="Offer details">
            <JobDetails details={data?.details} />
          </Section>
        </ConditionalWrap>

        <ConditionalWrap condition={data?.members?.length > 0}>
          <Section title="You'd be working with">
            <JobSlider>
              {data?.members?.map((member: any) => (
                <UserCard user={member?.person} key={member.id} tw="w-48" />
              ))}
            </JobSlider>
          </Section>
        </ConditionalWrap>
      </div>
    </JobInfo>
  </>
);
