import { WrappedImage } from "~ui/images";
import { UnstyledLink } from "~ui/links";
import { Heading } from "~ui/typography/Heading";

export const SinergiMitraGroserindo = () => {
  return (
    <div className="prose prose-zinc w-full max-w-full dark:prose-invert">
      <p data-svelte-h="svelte-d0h5ds">Oktober 2023 - Present</p>
      <div className="flex gap-x-2">
        <Heading as="h3">Full-Stack Developer at</Heading>
        <UnstyledLink className="underline-offset-4" href="https://onepasar.com/">
          <Heading as="h3" className="font-normal">
            Sinergi Mitra Groserindo
          </Heading>
        </UnstyledLink>
      </div>
      <WrappedImage src="/smg-works-vertical.png" alt="SMG Works" width={1920} height={1080} />
      <p className="">
        I joined{" "}
        <UnstyledLink className="underline-offset-4" href="https://onepasar.com/">
          Sinergi Mitra Groserindo
        </UnstyledLink>{" "}
        as a full-stack developer and my job there was to handle their client projects as a
        maintainer and developer especially for{" "}
        <UnstyledLink className="underline-offset-4" href="https://horizonfastferry.com.sg/">
          Horizon Fast Ferry
        </UnstyledLink>{" "}
        , I also contributed to making their projects such as{" "}
        <UnstyledLink className="underline-offset-4" href="https://batamferry.com/">
          Batam Ferry
        </UnstyledLink>{" "}
        , and I also handled several more projects.
      </p>
      <Heading as="h3" className="mb-0">
        Tech Stack
      </Heading>
      <div className="flex gap-x-10">
        <ul className="my-0">
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>jQuery</li>
          <li>Nuxt.js</li>
        </ul>
      </div>
    </div>
  );
};

export const Loko = ({}) => {
  return (
    <div className="prose prose-zinc w-full max-w-full dark:prose-invert">
      <p data-svelte-h="svelte-d0h5ds">November 2020 - July 2023</p>
      <div className="flex gap-x-2">
        <Heading as="h3">Front-End Developer at</Heading>
        <UnstyledLink className="underline-offset-4" href="https://loko.co.id/">
          <Heading as="h3" className="font-normal">
            Loko
          </Heading>
        </UnstyledLink>
      </div>
      <WrappedImage src="/loko-works.png" alt="Loko Works" width={1920} height={1080} />
      <p className="">
        Before I worked as a web developer, I joined{" "}
        <UnstyledLink className="underline-offset-4" href="https://loko.co.id/">
          Loko
        </UnstyledLink>{" "}
        as an intern UI/UX designer, because I have some knowledge about Front-End, then after the
        internship was over, I was offered as a Front-End developer, at that time I also
        participated in developing their projects, such as{" "}
        <UnstyledLink className="underline-offset-4" href="https://sisfocampus.loko.co.id/">
          LMS for Universities
        </UnstyledLink>
        ,{" "}
        <UnstyledLink className="underline-offset-4" href="https://sisfoschool.loko.co.id/">
          LMS for Universities
        </UnstyledLink>
        , and several other projects.
      </p>
      <Heading as="h3" className="mb-0">
        Tech Stack
      </Heading>
      <div className="flex gap-x-10">
        <ul className="my-0">
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>jQuery</li>
          <li>React.js</li>
        </ul>
        <ul className="my-0">
          <li>Next.js</li>
          <li>Nuxt.js</li>
          <li>Flutter</li>
        </ul>
      </div>
    </div>
  );
};
