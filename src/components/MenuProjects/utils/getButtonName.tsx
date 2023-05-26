export const getButtonName = (
  buttonNames: string[] | undefined,
  defaultValue: string
) => (buttonNames ? buttonNames[0] : defaultValue);
