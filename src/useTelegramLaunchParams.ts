import { useEffect, useState } from "react";

interface LaunchParams {
  tgWebAppData?: string;
  tgWebAppVersion?: string;
  tgWebAppPlatform?: string;
  tgWebAppThemeParams?: string;
  [key: string]: string | undefined;
}

export const useTelegramLaunchParams = () => {
  const [params, setParams] = useState<LaunchParams>({});

  useEffect(() => {
    const hash = window.location.hash.slice(1); // убираем #
    const queryParams = new URLSearchParams(hash);
    const allParams: LaunchParams = {};

    Array.from(queryParams.entries()).forEach(([key, value]) => {
      allParams[key] = value;
    });

    setParams(allParams);
  }, []);

  return params;
};
