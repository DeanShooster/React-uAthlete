export function BMICalculator(weight: number, height: number) {
  if (weight && height) {
    const BMI = weight / ((height / 100) * (height / 100));
    return BMI.toFixed(2);
  }
  return null;
}
