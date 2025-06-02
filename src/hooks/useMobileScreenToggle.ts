import { useCallback, useEffect } from "react";
import { useToggle, useEventListener } from "ahooks";

const getIsXsScreen = () => window.innerWidth < 640;

const useMobileScreenToggle = () => {
  const [isMobileScreen, { set: setMobileScreen }] = useToggle(getIsXsScreen());

  const handleResize = useCallback(() => {
    const currentIsXsScreen = getIsXsScreen();
    setMobileScreen(currentIsXsScreen);
  }, [setMobileScreen]);

  useEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  return isMobileScreen;
};
export default useMobileScreenToggle;
