---
title: Message
---

### Message

**To use, inject the message service and call the desired method**

```shell
  // inject message service
  constructor(
    private readonly smsService: SmsService,
  ) {}

  // call method
  await this.smsService.sendSms(contactNumber: string, message: string)
```
