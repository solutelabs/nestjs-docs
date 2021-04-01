---
title: Decorators
---

## Auth Gaurd

**Use this when you want to make your api secure/ unauthenticated user can't access it**

```shell
@Query(() => String)
@UseGuards(JwtAuthGuard)
async test() {
    return 'test'
  }
```

## Role Gaurd

**Use this when you want to make your api accessible to a certain set user with specific role**

```shell
@Query(() => String)
@UseGuards(JwtAuthGuard, RolesGuard)
@Role('role')
async test() {
    return 'test'
  }
```

## Webhook Gaurd

**Use this when you want to secure your webhook created using hasura**

```shell
@Query(() => String)
@UseGuards(WebhookAuthGuard)
async test() {
    return 'test'
  }
```

## Throttler Guard

**Use this when you want to limit your api to be hit not more than n no of times**

```shell
@Query(() => String)
@UseGuards(GqlThrottlerGuard)
async test() {
    return 'test'
  }
```
