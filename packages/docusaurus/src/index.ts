import type { LoadContext, Plugin } from "@docusaurus/types";

export interface Options {}

interface Content {}

export default async function myPlugin(
  context: LoadContext,
  opts: Options
): Promise<Plugin<Content>> {
  console.log({ context, opts });

  return {
    name: "doctribute",
    contentLoaded({ content, actions }) {
      // content is the loaded content
      // actions is a set of utility methods
    },
  };
}
