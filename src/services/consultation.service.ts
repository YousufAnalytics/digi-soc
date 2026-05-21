import type { BookConsultationPayload } from "../types/consultation.types";
import { API_BASE_URL } from "../config/api";
import { ENDPOINTS } from "../constants/endpoints";

export const bookConsultation = async (payload: BookConsultationPayload) => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.CONSULTATION}`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: payload.name,
      companyName: payload.companyName,
      phoneNumber: payload.number,
      email: payload.email,
      serviceType: payload.serviceType,
      businessGoals: payload.businessGoals,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to book consultation");
  }

  return data;
};
