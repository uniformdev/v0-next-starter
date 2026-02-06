import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import { UniformComposition } from "@uniformdev/canvas-react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { UniformDeployedPreviewBanner } from "@/components/UniformDeployedPreviewBanner";
import { useSetViewportQuirk } from "@/hooks/useSetViewportQuirk";

export interface PageCompositionProps {
  data: RootComponentInstance;
}

const navigation = [{ title: "Home", url: "/" }, { title: "About", url: "/about" }];

export default function PageComposition({
  data,
}: PageCompositionProps) {
  const { metaTitle } = data?.parameters || {};
  // set initial viewport quirk
  useSetViewportQuirk();
  return (
    <>
      <Head>
        <title>{metaTitle?.value as string}</title>
      </Head>
      <UniformDeployedPreviewBanner />
      <main className="min-h-[20vh] py-8 flex-1 flex flex-col justify-center items-center">
        <Navigation navLinks={navigation} />
        <UniformComposition data={data} />
        <Footer />
      </main>
    </>
  );
}
