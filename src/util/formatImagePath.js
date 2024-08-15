import { domain } from "./http/http";

export function formatImagePath(imagePath) {
  return domain + imagePath.replace("\\", "/");
}
