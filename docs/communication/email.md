---
title: Email
---

**To use, inject the mail service and call the desired method**

```shell
  // inject email service
  constructor(
    private readonly emailService: EmailService,
  ) {}

  // call method
  await this.emailService.sendInvitation(payload)
```
