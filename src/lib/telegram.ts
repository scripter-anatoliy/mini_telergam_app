import { init, retrieveLaunchParams, isTMA } from "@telegram-apps/sdk-react";

type TelegramUser = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
};

type TelegramEnv = {
  isTelegram: boolean;
  user: TelegramUser | null;
  themeParams: {
    bg_color?: string;
    text_color?: string;
  };
  version?: string;
};

let telegramEnv: TelegramEnv = {
  isTelegram: false,
  user: null,
  themeParams: {},
};

export const initTelegram = async (): Promise<TelegramEnv> => {
  try {
    // Проверяем, находимся ли мы в Telegram
    const inTelegram = await isTMA("complete");

    if (inTelegram) {
      await init();
      const params = retrieveLaunchParams();

      telegramEnv = {
        isTelegram: true,
        user: params.tgWebAppData?.user || null,
        themeParams: params.tgWebAppThemeParams || {},
        version: params.tgWebAppVersion,
      };
    }
  } catch (error) {
    console.warn("Telegram environment not detected:", error);
  }

  return telegramEnv;
};

export const getTelegramEnv = (): TelegramEnv => telegramEnv;

export const setupTelegramMock = (mockData: Partial<TelegramEnv> = {}) => {
  telegramEnv = {
    isTelegram: false,
    user: {
      id: 123456789,
      first_name: "Локальный",
      last_name: "Пользователь",
      username: "dev_user",
      ...mockData.user,
    },
    themeParams: {
      bg_color: "#17212b",
      text_color: "#ffffff",
      ...mockData.themeParams,
    },
    version: "6.7",
    ...mockData,
  };
};
