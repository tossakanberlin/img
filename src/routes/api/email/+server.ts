import { PRIVATE_EMAIL_PASS, PRIVATE_EMAIL_USER } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async (event) => {
	const body = await event.request.json();

	const { from, to, subject, html } = body;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: PRIVATE_EMAIL_USER,
			pass: PRIVATE_EMAIL_PASS
		}
	});

	const info = await transporter.sendMail({
		from, // sender address
		to, // list of receivers
		subject, // Subject line
		html // html body
	});

	return json({
		ok: true,
		info
	});
};
