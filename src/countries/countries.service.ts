import { Injectable } from '@nestjs/common';
import { CountriesRepository } from './countries.repository';

@Injectable()
export class CountriesService {
  constructor(private readonly countriesRepository: CountriesRepository) {}

  async getAvailableCountries() {
    return this.countriesRepository.fetchAvailableCountries();
  }

  async getCountryInfo(code: string) {
    const countryInfo =
      await this.countriesRepository.fetchBorderCountries(code);

    if (!countryInfo) {
      throw new Error('Country not found');
    }

    const countryName = countryInfo.name;

    const [populationData, flag] = await Promise.all([
      this.countriesRepository.fetchPopulationData(countryName),
      this.countriesRepository.fetchFlag(countryName),
    ]);

    return {
      borders: countryInfo.borders,
      populationData,
      flag,
    };
  }
}
