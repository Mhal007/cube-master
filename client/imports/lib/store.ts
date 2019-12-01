export const store = {
  get: (property: string): any => {
    try {
      return JSON.parse(localStorage.getItem(property) || '');
    } catch {
      return undefined;
    }
  },
  set: (property: string, value: any): void => {
    localStorage.setItem(property, JSON.stringify(value));
  },
  vars: {
    activeAlgorithmIds: 'activeAlgorithmIds'
  }
};
