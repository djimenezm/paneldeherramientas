import { featuredGuides, liveTools, pendingTools, pricingWorkflow, tools } from '@/lib/tools';

describe('tools registry', () => {
  it('lists the full catalog with the four tools already active', () => {
    expect(tools).toHaveLength(4);
    expect(liveTools).toHaveLength(4);
    expect(pendingTools).toHaveLength(0);
  });

  it('keeps every tool canonical URL clean and under https', () => {
    tools.forEach((tool) => {
      expect(tool.href.startsWith('https://')).toBe(true);
      expect(tool.href).not.toContain('?utm_');
      expect(tool.trackingHref).toContain('utm_source=paneldeherramientas');
      expect(tool.trackingHref).toContain('utm_medium=tool-directory');
    });
  });

  it('links the featured guides to the active ecosystem domains', () => {
    expect(featuredGuides).toHaveLength(21);

    featuredGuides.forEach((guide) => {
      expect(guide.href.startsWith('https://www.')).toBe(true);
      expect(guide.href).not.toContain('?utm_');
      expect(guide.trackingHref).toContain('utm_source=paneldeherramientas');
      expect(guide.trackingHref).toContain('utm_medium=hub-guide');
      expect(tools.some((tool) => tool.name === guide.relatedTool)).toBe(true);
    });
  });

  it('keeps the recommended workflow connected to active tools', () => {
    expect(pricingWorkflow).toHaveLength(4);

    pricingWorkflow.forEach((workflowStep, index) => {
      expect(workflowStep.step).toBe(String(index + 1).padStart(2, '0'));
      expect(workflowStep.href.startsWith('https://www.')).toBe(true);
      expect(workflowStep.trackingHref).toContain('utm_source=paneldeherramientas');
      expect(workflowStep.trackingHref).toContain('utm_medium=pricing-workflow');
      expect(workflowStep.trackingHref).toContain('utm_campaign=workflow_sequence');
      expect(tools.some((tool) => tool.name === workflowStep.toolName)).toBe(true);
      expect(workflowStep.takeaway.toLowerCase()).toMatch(/resumen|nota|cuota|precio/);
    });
  });
});
