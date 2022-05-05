import { NextFunction, Request, Response } from "express";
import UsersService from "#root/adapters/UserService";

const injectSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.cookies.userSessionId) {
      const userSession = await UsersService.fetchUserSession({
        sessionId: req.cookies.userSessionId,
      });

      res.locals.userSession = userSession;
    }
    return next();
  } catch (error) {
    throw error;
  }
};

export default injectSession;
