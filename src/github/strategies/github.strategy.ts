import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';

export class GithubStrategy extends PassportStrategy(Strategy) {
    constructor() {
        const options = {
            clientID: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            callbackURL: process.env.GITHUB_CALLBACK_URL as string,
        };
        super(options);
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any,
    ): Promise<any> {
        done(null, profile);
    }
}