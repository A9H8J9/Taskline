import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { GithubStrategy } from './strategies/github.strategy';

@Module({
    imports: [PassportModule.register({ session: false })],
    controllers: [GithubController],
    providers: [GithubService, GithubStrategy],
})
export class GithubModule { }
