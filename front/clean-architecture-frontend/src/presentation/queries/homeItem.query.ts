import type { HomeItemDto } from "@/presentation/dtos/bff/homeItemDto";

export const fetchHomeItem = async (): Promise<HomeItemDto> => {
  const response = await fetch("/api/main", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch home item: ${response.status}`);
  }

  return response.json();
};
