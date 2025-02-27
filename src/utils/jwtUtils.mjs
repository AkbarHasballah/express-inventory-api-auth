export const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '1h' });
};
