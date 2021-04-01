module.exports = {
  docs: [
    {
      type: "category",
      label: "NestJS Boilerplate",
      items: ["introduction"],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/project-setup",
        "getting-started/project-configuration",
      ],
    },
    {
      type: "category",
      label: "Running Application",
      items: ["running-application/docker", "running-application/local"],
    },
    {
      type: "category",
      label: "Database",
      items: [
        "database/introduction",
        "database/entity",
        "database/repository",
        "database/migration",
        "database/seeder",
      ],
    },
    {
      type: "category",
      label: "Authentication & Authorisation",
      items: [
        "authentication-authorisation/guard",
        "authentication-authorisation/decorator",
      ],
    },
    {
      type: "category",
      label: "Communication",
      items: [
        "communication/email",
        "communication/message",
        "communication/notification",
      ],
    },
  ],
};
