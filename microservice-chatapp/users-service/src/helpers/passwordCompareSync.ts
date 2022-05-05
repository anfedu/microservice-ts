import bcrypt from "bcryptjs";

const passwordComparySync = (passwordTest: string, passwordHash: string) =>
  bcrypt.compareSync(passwordTest, passwordHash);

export default passwordComparySync;
