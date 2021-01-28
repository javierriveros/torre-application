import { JobDetail } from "./JobDetail";

export const JobDetails = ({ details }: { details: any }) => {
  return (
    <>
      {details?.map((detail: any, index: number) => (
        <JobDetail detail={detail} key={`detail-${index}`} />
      ))}
    </>
  );
};
