import { useMutation } from "@tanstack/react-query";

export type ContactFormData = {
  inquiryType: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

// Simulated mock hook for the contact form
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1200));
      return { success: true, message: "Thank you! Your inquiry has been received." };
    },
  });
}
