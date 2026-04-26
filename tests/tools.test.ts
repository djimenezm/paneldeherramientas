import { featuredGuides, liveTools, pendingTools, tools } from '@/lib/tools';

describe('tools registry', () => {
  it('lists the full catalog with the four tools already active', () => {
    expect(tools).toHaveLength(4);
    expect(liveTools).toHaveLength(4);
    expect(pendingTools).toHaveLength(0);
  });

  it('keeps every tool under https', () => {
    tools.forEach((tool) => {
      expect(tool.href.startsWith('https://')).toBe(true);
    });
  });

  it('links the featured guides to the active ecosystem domains', () => {
    expect(featuredGuides).toHaveLength(4);

    featuredGuides.forEach((guide) => {
      expect(guide.href.startsWith('https://www.')).toBe(true);
      expect(tools.some((tool) => tool.name === guide.relatedTool)).toBe(true);
    });
  });
});
