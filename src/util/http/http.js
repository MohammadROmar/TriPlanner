import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "http://";
export const domain = protocol + "192.168.43.244:5065/";
