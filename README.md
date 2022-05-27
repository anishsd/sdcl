# Introduction

TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

# Getting Started

TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:

1. Installation process
2. Software dependencies
3. Latest releases
4. API references

# Build and Test

TODO: Describe and show how to build your code and run the tests.

# Contribute

TODO: Explain how other users and developers can contribute to make your code better.

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

# Publish npm package (via GitHub)

1. Ensure that `.github/workflows/publish.yml` exists otherwise create it (https://www.newline.co/courses/newline-guide-to-building-a-company-component-library/continuous-integration-with-github-actions)
2. Ensure that the name attribute in `package.json` is in the following format: @`GITHUB_USERNAME`/`PACKAGE_NAME`

# Consume this component library (published on npm via Github)

1. Ensure that `.npmrc` is created at the project's root level with the following:

```
//npm.pkg.github.com/:_authToken=PERSONAL_ACCESS_TOKEN
@GITHUB_USERNAME:registry=https://npm.pkg.github.com
```

2. The `PERSONAL_ACCESS_TOKEN` can be retrieved from `https://github.com/settings/tokens`
