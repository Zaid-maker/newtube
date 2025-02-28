export const mockFont = {
  className: 'mock-font',
  style: { fontFamily: 'Inter' },
};

export function createMockImport() {
  return () => Promise.resolve({ default: mockFont });
}
