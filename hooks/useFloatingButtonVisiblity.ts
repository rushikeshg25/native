import { usePathname } from 'expo-router';

const BUTTON_VISIBLE_PATHS = ['/group', '/friends', '/activity'];
const GROUP_PATH = '/group';

export function useFloatingButtonVisiblity(): {
  isVisible: boolean;
  path: string;
} {
  const pathname = usePathname();

  if (
    BUTTON_VISIBLE_PATHS.includes(pathname) ||
    pathname.startsWith(GROUP_PATH)
  ) {
    return { isVisible: true, path: pathname };
  }

  return { isVisible: false, path: pathname };
}
