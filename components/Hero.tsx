import { RichTextParamValue } from "@uniformdev/canvas";
import { UniformRichText } from "@uniformdev/canvas-next";
import {
  registerUniformComponent,
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-react";

type HeroProps = ComponentProps<{
  title: string;
  description?: RichTextParamValue;
}>;

const Hero: React.FC<HeroProps> = () => (
  <div>
    <UniformText
      className="m-0 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-neutral-900 [&>a]:text-neutral-700 [&>a]:no-underline hover:[&>a]:underline"
      parameterId="title"
      as="h1"
      data-test-id="hero-title"
      placeholder="Hero title goes here"
    />
    <UniformRichText
      parameterId="description"
      className="my-4 text-xl sm:text-2xl leading-normal text-center"
      placeholder="Hero description goes here"
      data-test-id="hero-description"
    />
  </div>
);

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
