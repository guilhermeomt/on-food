const helpers = require('handlebars-helpers')(['string']);


const pascalToSpecialCase = (str, separator) =>
  str.replace(/[A-Z]/g, (letter, index) =>
    index === 0 ? letter.toLowerCase() : `${separator}${letter.toLowerCase()}`
  );

module.exports = function (plop) {
  plop.setHelper("dash-case", function (text) {
    return pascalToSpecialCase(text, "-");
  });
  plop.setHelper("underscore-case", function (text) {
    return pascalToSpecialCase(text, "_");
  });

  plop.setGenerator("basic-component", {
    description: "Automatically generates a basic component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./components/{{name}}/{{name}}.tsx",
        templateFile: "./plop-templates/basic-component.tsx.hbs",
      },
      {
        type: "add",
        path: "./components/{{name}}/index.ts",
        templateFile: "./plop-templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "./components/{{name}}/{{name}}.module.css",
        templateFile: "./plop-templates/basic-component.module.css.hbs",
      },
      {
        type: 'modify',
        path: './components/index.ts',
        pattern:
          /(\/\/ PLOP WILL AUTO-EXPORT YOUR COMPONENT HERE. DO NOT REMOVE)/g,
        template:
          // eslint-disable-next-line quotes
          "export * from './{{name}}';\n$1",
      },
    ],
  });
};
