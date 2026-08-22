import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { joinPage, joinSlides } from "../../content/join";
import { PageHero, PhotoEditorial, TextCta } from "../../components/desktop/Editorial";
import { BrandLink, FacebookLink, InstagramLink } from "../../components/link";
import { social } from "../../content/links";

export default function JoinPage() {
  const member = joinSlides[0];
  const conversation = joinSlides[1];

  return (
    <>
      <PageHero title={joinPage.title} intro={joinPage.intro} image={member.image} />
      <PhotoEditorial
        title={member.title}
        paragraphs={member.paragraphs}
        image={member.image}
      >
        <BrandLink to={social.triathlonIreland} target="_blank">
          Visit Triathlon Ireland
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </BrandLink>
      </PhotoEditorial>
      <PhotoEditorial
        title={conversation.title}
        paragraphs={conversation.paragraphs}
        image={conversation.image}
        reverse
      >
        <div className="flex flex-wrap gap-6">
          <FacebookLink />
          <InstagramLink>@northwest.triathlonclub</InstagramLink>
        </div>
        <TextCta to="/contact">Contact</TextCta>
      </PhotoEditorial>
    </>
  );
}
