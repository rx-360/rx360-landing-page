import { useMutation } from "@tanstack/react-query";

export type CareerApplicationData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (data: CareerApplicationData) => {
      const res = await fetch(`${import.meta.env.BASE_URL}api/careers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to send application.");
      }
      return json as { success: boolean; message: string };
    },
  });
}
