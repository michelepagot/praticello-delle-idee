import { QuartzFilterPlugin } from "../types"

/**
 * 💡 TagPublish Filter Plugin
 * Only renders markdown files that contain the specified tag in their frontmatter tag list.
 */
export const TagPublish: QuartzFilterPlugin<{ tag: string }> = (userOpts) => {
  const opts = {
    tag: "garden", // Default tag to look for
    ...userOpts,
  }

  return {
    name: "TagPublish",
    shouldPublish(_ctx, [_tree, vfile]) {
      const tags: string[] = vfile.data?.frontmatter?.tags ?? []
      return tags.includes(opts.tag)
    },
  }
}
