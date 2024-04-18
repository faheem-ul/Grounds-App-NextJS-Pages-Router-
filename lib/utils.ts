import { twMerge } from "tailwind-merge";
import clsx,{ClassValue} from "clsx";

    export const cn = (...input:[])=>{
    return twMerge(clsx(input));
}