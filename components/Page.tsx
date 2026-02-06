import {
  registerUniformComponent,
  UniformSlot,
  type ComponentProps,
} from "@uniformdev/canvas-react";

type PageProps = ComponentProps;

const Page: React.FC<PageProps> = () => (
  <UniformSlot name="content" />
);

registerUniformComponent({
  type: "page",
  component: Page,
});

export default Page;
