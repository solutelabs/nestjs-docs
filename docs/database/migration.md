---
title: Migration
---

## Introduction

A migration is just a single file with sql queries to update a database schema and apply new changes to an existing database.

The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself.

\*Follow this if you are not using hasura. Hasura has its own way of handling migrations

## Usage

## Create new migration

```shell
npm run migrate table_name
```

This will create a new migration file in src/migrations/ 20200829220336-table_name.ts, the random number before the create_users_table is the timestamp.

## Apply migration

```shell
npm run migrate:apply
```

This will apply all the pending migrations
