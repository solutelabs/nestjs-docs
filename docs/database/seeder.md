---
title: Seeder
---

## Introduction

Seeders can be used to pre-populate your DB tables with fake data.

We have written few commands using nest and typeorm to ease your work.

## Usage

create a file with the data you need to seed in src/core/config/typeorm/seeder/data/yourfilename.ts

Example

```shell
export const countries = [
  { name: 'India', code: '+91' },
  { name: 'Canada', code: '+1' },
  { name: 'United states', code: '+1' },
];

```

Add the method to seed data in seeder.service.ys file
Example

```shell
  private countriesData;

  constructor(
    @InjectRepository(CountryEntity)
    private countriesRepository: Repository<CountryEntity>,
  ) {
    this.countriesData = countries;
  }
  async seed() {
    await this.countries();
  }

  async countries() {
    for (const country of this.countriesData) {
      const dbCountry = await this.countriesRepository.findOne({
        where: { name: country.name },
      });

      if (!dbCountry) {
        const newCountry = await this.countriesRepository.create(country);
        await this.countriesRepository.save(newCountry);
      }
    }
  }

```

## Run seeder

To seed the DB Table with your data, simply run:

```shell
npm run seed
```
