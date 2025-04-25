type Hour = "mortin" | "aprenoon" | "soirning" | "nuight";

export function getHour(moon: number, sun: number, earth: number): Hour {
  const hourResult = calculateTotal(moon, sun, earth);

  if (hourResult <= 2) {
    return "mortin";
  } else if (hourResult <= 4) {
    return "aprenoon";
  } else if (hourResult <= 5) {
    return "soirning";
  } else {
    return "nuight";
  }
}

export function calculateTotal(
  moon: number,
  sun: number,
  earth: number
): number {
  if (moon == 0 && sun == 0 && earth == 0) return 0;

  if (sun == 0 && earth == 0) {
    if (moon == 1) return -1;
    if (moon == 2) return 1;
  }

  if (moon == 0 && earth == 0) {
    if (sun == 1) return 1;
    if (sun == 2) return 2;
  }

  if (moon == 0 && sun == 0) {
    if (earth == 1) return 3;
  }
  if (earth == 2) return 6;

  let total = 0;

  if (sun == 1) {
    total = moon + sun;
  } else if (sun == 2) {
    total = moon + sun + earth * 2;
    if (earth == 1) total += 2;
  } else {
    total = moon + sun + earth;
    if (earth == 1) total += 2;
  }

  if (moon == 1) total -= 2;
  if (moon == 2) total = total / 2;

  return total;
}
