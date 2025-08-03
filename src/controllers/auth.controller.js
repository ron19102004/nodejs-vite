import authService from "../services/auth.service.js";
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const login = (req, res) => {
  const { username, password } = req.body;
  const data = authService.login(username, password);
  return res.json({
    data: data,
  });
};

export default {
  login,
};
