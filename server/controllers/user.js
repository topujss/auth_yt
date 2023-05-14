/**
 * @desc get all users data
 * @route GET /user
 * @access PUBLIC
 */
export const getUserInfo = asyncHandler(async (req, res) => {
  res.send('get all user');
});
