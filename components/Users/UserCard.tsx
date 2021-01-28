import Link from "next/link";
import * as React from "react";

import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";

import "twin.macro";
import { Card, JobDetail, JobSlider, UserHeadline, UserName } from "./styles";
import { UserImage } from "./UserImage";
import { ConditionalWrap } from "../ConditionalWrap";
import { LocationIcon, VerifiedIcon } from "../Icons";

interface Props {
  user: any;
}

export const UserCard = ({ user }: Props) => {
  return (
    <Card tw="flex flex-col justify-between">
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
        <ConditionalWrap condition={Boolean(user?.locationName)}>
          <JobDetail tw="flex mt-2 text-left justify-start items-start">
            <LocationIcon />
            {user?.locationName}
          </JobDetail>
        </ConditionalWrap>
      </div>
      <div>
        <JobSlider tw="col-span-2">
          {user?.skills?.map((skill: any, index: number) => (
            <Tag key={`skill-${index}`}>{skill.name}</Tag>
          ))}
        </JobSlider>

        <Link href={`/bio/${user.username}`} passHref>
          <Button tw="inline-flex" small>
            View more
          </Button>
        </Link>
      </div>
    </Card>
  );
};
