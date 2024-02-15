import { useSearchParams } from "next/navigation";

export default function useCreateQueryString() {
  const searchParams = useSearchParams();

  const createQueryString = (query: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);
    for (const [name, value] of Object.entries(query)) {
      if (name !== null && value !== undefined) {
        params.set(name, value);
      }
    }

    return params.toString();
  };

  return createQueryString;
}
