function isAdmin(userRole) {
  let isAdmin = undefined;
  if (userRole === "ADMIN") {
    isAdmin = true;
  }
  if (userRole === "USER") {
    isAdmin = false;
  }
  return isAdmin;
}

export { isAdmin };
