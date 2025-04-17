import { useSignal, backButton } from "@telegram-apps/sdk-react";

export function BackButton() {
  const isVisible = useSignal(backButton.isVisible);

  return (
    <button
      onClick={() => backButton.hide()}
      style={{ display: isVisible ? "block" : "none" }}
    >
      Назад
    </button>
  );
}
