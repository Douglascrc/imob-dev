export const useTracking = () => {
  const trackConversion = (label: string, value?: number) => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", "conversion", {
      send_to: "AW-341641045/IZ-6CJ7Qn7UaENW09KiB",
      value: value || 1.0,
      currency: "BRL",
      transaction_id: `${label}_${Date.now()}`,
      event_category: "engagement",
      event_label: label,
    });

    window.gtag("event", "whatsapp_sticker_click", {
      event_category: "engagement",
      event_label: label,
    });
  };

  return { trackConversion };
};
