import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesRepository {
  private readonly dateNagerApi = 'https://date.nager.at/api/v3';
  private readonly countriesNowApi = 'https://countriesnow.space/api/v0.1';

  async fetchAvailableCountries() {
    const response = await axios.get(`${this.dateNagerApi}/AvailableCountries`);
    return response.data;
  }

  async fetchBorderCountries(code: string) {
    const response = await axios.get(
      `${this.dateNagerApi}/CountryInfo/${code}`,
    );
    return {
      name: response.data.commonName,
      borders: response.data.borders,
    };
  }

  async fetchPopulationData(countryName: string) {
    const response = await axios.post(
      `${this.countriesNowApi}/countries/population`,
      {
        country: countryName,
      },
    );
    return response.data.data;
  }

  async fetchFlag(countryName: string) {
    const response = await axios.post(
      `${this.countriesNowApi}/countries/flag/images`,
      {
        country: countryName,
      },
    );
    return response.data.data.flag;
  }
}
