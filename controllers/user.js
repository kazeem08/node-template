module.exports = {
  async getAllUser(req, res) {
    consoq.log('JEJEEKEK')
    return res.successResponse({
      code: 200,
      message: 'Data fetched successfully',
      response: [],
    });
  }
}