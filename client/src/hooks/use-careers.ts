import { useMutation } from "@tanstack/react-query";

export type CareerApplicationData = {
  name: string;
  email: string;
  phone: string;
  resumeLink: string;
  coverLetter: string;
  role: string;
};

// Simulated mock hook for the career application form
export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (data: CareerApplicationData) => {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return { success: true, message: "Application submitted successfully! We will be in touch." };
    },
  });
}
