import Head from "next/head";
import { FC, ReactNode } from "react";

type ComponentCoverProps = {
  jsonLd: Record<string, unknown>;
  children: ReactNode;
};

export const ComponentCover: FC<ComponentCoverProps> = ({
  jsonLd,
  children,
}) => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {children}
    </>
  );
};
