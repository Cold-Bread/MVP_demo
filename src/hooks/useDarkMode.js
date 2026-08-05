import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const darkModeAtom = atomWithStorage('darkMode', false);

const useDarkMode = () => {
    const [isDark, setIsDark] = useAtom(darkModeAtom);
  
    return { isDark, setIsDark };
};

export default useDarkMode;