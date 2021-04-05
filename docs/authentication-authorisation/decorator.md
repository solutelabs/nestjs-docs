---
title: Decorators
---

Decorators are used when we want to excess the request object data.

## User Decorator

**Use this when you want to access the logged in user**

```shell
@Query(() => String)
@UseGuards(JwtAuthGuard)
async test(
    @User() user: UserEntity,
) {
    return 'test'
  }
```

## Role Decorators

**Use this when you want to make your api accessible to a certain set user with specific role**

```shell
@Query(() => String)
@UseGuards(JwtAuthGuard, RolesGuard)
@Role('role')
async test() {
    return 'test'
  }
```

\*Role decorator is used in conjunction with Role Guard
