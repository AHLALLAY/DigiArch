import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    name: process.env.APP_NAME,
    url: process.env.APP_URL,
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV,
    cors: {
        origin: process.env.CORS_ORIGIN,
        credentials: process.env.CORS_CREDENTIALS,
    },
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760'),
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
    },
}));