module.exports = {
  async getAllUser(req, res) {
    return res.successResponse({
      code: 200,
      message: 'Data fetched successfully',
      response: [],
    });
  }
}