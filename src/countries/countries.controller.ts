import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('available')
  async getAvailableCountries() {
    return this.countriesService.getAvailableCountries();
  }

  @Get(':code')
  async getCountryInfo(@Param('code') code: string) {
    return this.countriesService.getCountryInfo(code);
  }
}
