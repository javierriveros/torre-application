import Link from "next/link";
import * as React from "react";

import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";

import "twin.macro";
import { formatMoney } from "@/utils";
import { UserImage } from "./UserImage";
import { TextMuted } from "@/components/Genome/styles";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { LocationIcon, VerifiedIcon, WeightIcon } from "@/components/Icons";
import { Card, JobDetail, JobSlider, UserHeadline, UserName } from "./styles";

interface Props {
  user: any;
  [x: string]: any;
}

export const UserCard = ({ user, ...rest }: Props) => {
  return (
    <Card tw="flex flex-col justify-between" {...rest}>
      <UserImage username={user.username} picture={user.picture} />
      <div>
        <UserName tw="flex items-center">
          {user.name} {user?.verified && <VerifiedIcon />}
        </UserName>

        <UserHeadline>
          {user?.professionalHeadline?.length > 100
            ? user?.professionalHeadline?.substring(0, 100).concat("...")
            : user?.professionalHeadline}
        </UserHeadline>
        <ConditionalWrap condition={Boolean(user?.weight)}>
          <TextMuted tw="flex items-center">
            <WeightIcon tw="w-4 h-4 mr-1" /> {formatMoney(user?.weight)}
          </TextMuted>
        </ConditionalWrap>
        <ConditionalWrap condition={Boolean(user?.locationName)}>
          <JobDetail tw="flex mt-2 text-left justify-start items-start">
            <LocationIcon />
            {user?.locationName}
          </JobDetail>
        </ConditionalWrap>
      </div>
      <div>
        <ConditionalWrap condition={user?.skills?.length > 0}>
          <JobSlider tw="col-span-2">
            {user?.skills?.map((skill: any, index: number) => (
              <Tag key={`skill-${index}`}>{skill.name}</Tag>
            ))}
          </JobSlider>
        </ConditionalWrap>

        <Link href={`/bio/${user.username}`} passHref>
          <Button tw="inline-flex" small>
            View more
          </Button>
        </Link>
      </div>
    </Card>
  );
};
