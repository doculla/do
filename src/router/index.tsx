import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import NotFoundPage from '../pages/not-found';

export default [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/registration',
		component: RegistrationPage,
	},
	{
		path: '*',
		component: NotFoundPage,
	},
];
