import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBlurUrl(url: string) {
  // Insert Cloudinary blur params
  return url.replace(
    "/upload/",
    "/upload/f_auto,q_auto,w_20,e_blur:1000/"
  );
}
