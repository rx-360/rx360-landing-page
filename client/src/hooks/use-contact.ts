import { useMutation } from "@tanstack/react-query";

export type ContactFormData = {
  inquiryType: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to send message.");
      }
      return json as { success: boolean; message: string };
    },
  });
}
