import { UserSessionType } from "../types";
import UsersService from "#root/adapters/UserService";

const UserSession = {
  user: async (userSession: UserSessionType) => {
    const user = await UsersService.fetchUser({ userId: userSession.userId });
    return user;
  },
};

export default UserSession;
