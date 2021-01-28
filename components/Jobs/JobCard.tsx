import * as React from "react";
import Link from "next/link";
import "twin.macro";

import { JobImage } from "./JobImage";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Opportunity } from "@/services/api";
import { formatMoney, split } from "@/utils";
import { CashIcon, LocationIcon } from "@/components/Icons";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { ButtonsContainer, Card, JobSlider, JobTitle, JobDetail } from "./styles";

interface Props {
  opportunity: Opportunity;
}

export const JobCard = ({ opportunity }: Props) => {
  return (
    <Card tw="flex flex-col justify-between">
      <JobImage organizations={opportunity.organizations} />
      <div>
        <JobTitle>{opportunity.objective}</JobTitle>

        <ConditionalWrap condition={Boolean(opportunity?.type)}>
          <JobDetail>
            {split(opportunity.type)}
            {opportunity?.organizations[0]?.name && <> &bull; </>}
          </JobDetail>
        </ConditionalWrap>
        <JobDetail>{opportunity?.organizations[0]?.name}</JobDetail>

        <span tw="dark:text-gray-300 text-gray-600 text-sm flex mt-2">
          <LocationIcon tw="text-blue-500" /> {opportunity.remote && "Remote"}
          <ConditionalWrap condition={opportunity.locations.length > 0}>
            <>
              {opportunity.remote && <> &bull;</>} {opportunity.locations[0]}
            </>
          </ConditionalWrap>
        </span>
        <ConditionalWrap
          condition={Boolean(opportunity?.compensation?.data && opportunity?.compensation.visible)}
        >
          <p tw="dark:text-gray-300 text-gray-600 text-sm flex mt-2 ">
            <CashIcon tw="text-green-500" />
            <span>
              {formatMoney(opportunity?.compensation?.data?.minAmount)}
              {opportunity?.compensation?.data?.minAmount &&
                opportunity?.compensation?.data?.maxAmount &&
                " - "}
              {formatMoney(opportunity?.compensation?.data?.maxAmount)}{" "}
              {opportunity?.compensation?.data?.currency}
              {"/"}
              {opportunity?.compensation?.data?.periodicity}
            </span>
          </p>
        </ConditionalWrap>
      </div>

      <ButtonsContainer>
        <ConditionalWrap condition={Boolean(opportunity.skills)}>
          <JobSlider tw="col-span-2">
            {opportunity?.skills?.map((tag) => (
              <Tag key={tag.name}>{tag.name}</Tag>
            ))}
          </JobSlider>
        </ConditionalWrap>
        <ButtonsContainer tw="col-span-2">
          <Link href={`/jobs/${opportunity.id}`} passHref>
            <Button>Details</Button>
          </Link>
          <Button href={`https://torre.co/jobs/${opportunity.id}`} secondary target="_blank">
            Apply
          </Button>
        </ButtonsContainer>
      </ButtonsContainer>
    </Card>
  );
};
