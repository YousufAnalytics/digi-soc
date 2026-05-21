import { useMutation } from "@tanstack/react-query";

import { bookConsultation } from "../services/consultation.service";

export const useBookConsultation = () => {
  return useMutation({
    mutationFn: bookConsultation,
  });
};