import UsersService from "#root/adapters/UserService";

interface Args {
  password: string;
  username: string;
}

const createUserResolver = async (obj: any, { password, username }: Args) => {
  return await UsersService.createUser({ password, username });
};

export default createUserResolver;
