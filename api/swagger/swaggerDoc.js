const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Parking API",
      version: "1.0.0",
      description: "Documentation Parking API"
    },
    basePath: "/"
  },
  apis: ["routes.js"]
};

const specs = swaggerJsDoc(options);

module.exports = app => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(options));
};
