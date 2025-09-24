import { testService } from "../service/test.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const testApi = catchAsync(async (req, res) => {
  const result = await testService.testApi({
    body: req.body,
    query: req.query,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Api Successfully Working",
    data: result,
  });
});

export const testController = {
  testApi,
};
