/**
 * Calculates generic BMI. (weight,height) -> 15.17
 * @param weight
 * @param height
 * @returns string number
 */
export function BMICalculator(weight: number, height: number) {
  if (weight && height) {
    const BMI = weight / ((height / 100) * (height / 100));
    return BMI.toFixed(2);
  }
  return null;
}

/**
 * Calculates the progression related from starting point to current point and calculates the total %.
 * @param progress
 * @returns Number
 */
export function CategoryProgressCalculator(progress: number[][]) {
  let totalPercent = 1,
    isChanged = false;
  for (let i = 0; i < progress.length; i++) {
    if (progress[i].length > 1) {
      let percent = progress[i][progress[i].length - 1] / progress[i][0];
      if (percent < 1) percent *= -1;
      totalPercent *= percent;
      isChanged = true;
    }
  }
  return isChanged ? Math.round(totalPercent) : 0;
}

/**
 * Calculates the avg progression with basic avg of 3 percentiles.
 * @param strengthProgress
 * @param enduranceProgress
 * @param staminaProgress
 * @returns Number
 */
export function AvgProgressCalculator(strengthProgress: number, enduranceProgress: number, staminaProgress: number) {
  return Math.round((strengthProgress + enduranceProgress + staminaProgress) / 3);
}

/**
 * Calculates the total progression with basic avg of 3 percentiles.
 * @param strengthProgress
 * @param enduranceProgress
 * @param staminaProgress
 * @param progressionDuration
 * @returns Number
 */
export function TotalProgressionCalculator(strengthProgress: number, enduranceProgress: number, staminaProgress: number, progressionDuration: number) {
  return Math.round((strengthProgress + enduranceProgress + staminaProgress) / progressionDuration > 0 ? progressionDuration : 1);
}
