import { usePathname } from 'expo-router';

const BUTTON_HIDDEN_PATHS = ['/addExpense', '/account'];

export function useFloatingButtonVisiblity(): {
  isVisible: boolean;
  path: string;
} {
  const pathname = usePathname();

  if (BUTTON_HIDDEN_PATHS.includes(pathname)) {
    return { isVisible: false, path: pathname };
  }

  return { isVisible: true, path: pathname };
}
