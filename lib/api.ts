import { Metadata } from "next";

interface MetadataLib {
  [x: string]: Metadata;
}

export const metadataLib: MetadataLib = {
  home: {
    title: "",
    description: "",
  },
  about: {
    title: "",
    description: "",
  },
};
