import { liveTools, pendingTools, tools } from '@/lib/tools';

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
});
