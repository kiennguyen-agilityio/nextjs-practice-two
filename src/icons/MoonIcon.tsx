import { CustomClassType } from '@/types/components';

export const MoonIcon = ({
  customClass = 'w-6 h-6',
  ...rest
}: CustomClassType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={customClass}
    {...rest}
  >
    <path d="M12 2a1 1 0 011 1c0 .253-.047.505-.138.744A7.967 7.967 0 0112 12a7.967 7.967 0 01-7.256-4.743A1.001 1.001 0 014 6a1 1 0 011-1 8.003 8.003 0 007.862-3.118A1 1 0 0112 2zm4.295 6.704a1 1 0 011.409 1.418 8.056 8.056 0 01-1.994 1.659A9.045 9.045 0 0112 20.877c-.768.035-1.533.123-2.293.262a1 1 0 11-.295-1.962 6.987 6.987 0 002.585-1.006c.726-.558 1.414-1.223 2.03-1.994a9.038 9.038 0 002.268-5.474 1 1 0 011.005-.9z" />
  </svg>
);
