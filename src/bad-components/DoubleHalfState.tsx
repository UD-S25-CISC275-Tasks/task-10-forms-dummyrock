import { useState } from "react";

export function useDhValue() {
    return useState<number>(10);
}
