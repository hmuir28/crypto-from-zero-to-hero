import { Router } from 'express';

import AuthController from '../controllers/auth.controller';

const router = Router();

const { authentication, success } = AuthController.callback();
AuthController.logOut();

router.get('/failed', AuthController.failed);

router.get('/success', AuthController.isLoggedIn, AuthController.success);

router.get('/google', AuthController.signInWithGoogle());

router.get('/logout', AuthController.logOut());

router.get('/google/callback', authentication(), success);

export = router;
