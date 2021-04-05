---
title: Notification
---

### Notification

**To use, inject the notification service and call the desired method**

```shell
  // inject notification service
  constructor(
    private readonly onesignalService: OnesignalService,
  ) {}

  // call method
  await this.onesignalService.createNotificatioBaseOnExternalId(payload)
```
