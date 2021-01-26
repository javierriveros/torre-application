import {
  Card,
  JobDescription,
  JobImage,
  JobSlider,
  JobSliderItem,
  JobTitle,
  ButtonsContainer,
} from "./styles";
import { Button } from "@/components/Button";
import Link from "next/link";

interface Props {
  id: string;
  image: string;
  title: string;
  description: string;
  tags?: { name: string; experience: string }[];
  link: string;
}

export const JobCard = ({
  id,
  image,
  title,
  description,
  tags,
  link,
}: Props) => {
  return (
    <Card>
      <JobImage src={image} />
      <JobTitle>{title}</JobTitle>
      <JobDescription>{description}</JobDescription>
      {tags && (
        <JobSlider>
          {tags.map((tag) => (
            <JobSliderItem key={tag.name}>{tag.name}</JobSliderItem>
          ))}
        </JobSlider>
      )}

      <ButtonsContainer>
        <Link href={`/jobs/${id}`} passHref>
          <Button>Details</Button>
        </Link>
        <Button href={link} secondary target="_blank">
          Apply now
        </Button>
      </ButtonsContainer>
    </Card>
  );
};
