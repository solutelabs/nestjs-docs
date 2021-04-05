---
title: Repository
---

TypeORM supports the repository design pattern, so each entity has its own repository. These repositories can be obtained from the database connection.

## Using Repository

Include the entity in the **TypeOrmModule.forFeature()** in the imports section in the module.

```shell
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserEntity } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
})
export class UsersModule {}
```

This module uses the forFeature() method to define which repositories are registered in the current scope. With that in place, we can inject the UsersRepository into the UserService using the @InjectRepository() decorator:

```shell
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}


}
```
