import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "https://";
export const domain = protocol + "localhost:7219/";
