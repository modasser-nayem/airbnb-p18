// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testApi = async (payload: { body: any; query: any }) => {
  return payload;
};

export const testService = { testApi };
