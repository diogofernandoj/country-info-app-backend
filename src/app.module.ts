import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { CountriesRepository } from './countries/countries.repository';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService, CountriesRepository],
})
export class AppModule {}
