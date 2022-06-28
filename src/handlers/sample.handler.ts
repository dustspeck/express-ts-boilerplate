export const sampleHandler = async (param: string) => {
  try {
    return param;
  } catch (error) {
    console.log(error);
    return null;
  }
};
