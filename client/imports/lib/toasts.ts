import { toast } from 'react-semantic-toasts';

export const toastNoActiveAlgorithms = () =>
  toast({
    title: 'No active algorithms',
    type: 'warning',
    description:
      'Randomizing algorithms pauzed until you select at least one algorithm',
    time: 5000
  });
