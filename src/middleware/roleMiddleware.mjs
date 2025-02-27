export const roleMiddleware = (roles) => {
  return (req, res, next) => {
    console.log("User Role:", req.user?.role); // Tambahkan ini
    console.log("Allowed Roles:", roles); // Tambahkan ini

    const userRole = req.user?.role;

    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({ message: "Access forbidden, insufficient role" });
    }

    next();
  };
};
