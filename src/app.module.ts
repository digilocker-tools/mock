import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { OidcModule } from 'nest-oidc-provider';
import { OidcConfigModule } from './config/oidc-config.module';
import { OidcConfigService } from './config/oidc-config.service';
import { AppController } from './app.controller';
import { InteractionModule } from './interaction/interaction.module';

@Module({
  imports: [
    OidcModule.forRootAsync({
      imports: [OidcConfigModule],
      useExisting: OidcConfigService,
    }),
    InteractionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
