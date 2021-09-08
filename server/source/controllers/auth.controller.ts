import passport from 'passport';

class AuthController {
  constructor() {
  }

  callback() {
    return {
      authentication: () => passport.authenticate('google', { failureRedirect: '/failed' }),
      success: (req: any, res: any) => res.redirect('/success'),
    };
  }

  failed(req: any, res: any) {
    res.send('Failed');
  }

  isLoggedIn(req: any, res: any, next: any) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
  }

  logOut() {
    return (req: any, res: any) => {
      req.session = null;
      req.logout();
      res.redirect('/failed');
    }
  }

  signInWithGoogle() {
    return passport.authenticate('google', { scope: ['email', 'profile'] });
  }

  success(req: any, res: any) {
    res.send(`Welcome ${req.user.email}`)
  }
}

export default new AuthController();
