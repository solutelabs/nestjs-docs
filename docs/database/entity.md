---
title: Entity
---

## Introduction

We have created a BaseEntity as parent class for entity which will have common fileds like:

- id
- created_at
- updated_at

So instead of addind these column in each entity, you just need to extend it.

## Usage

```shell src/user/models/User.ts
@Entity('user')
export class UserEntity extends BaseEntity  {
  @Column('text')
  email: string;
}
```
