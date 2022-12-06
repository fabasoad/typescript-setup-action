# Template for TypeScript Setup GitHub Action

> :warning: This project is deprecated and no longer maintained starting from
> 2022/12/06. Initially it was created as the bootstrap for the "Setup &lt;tool&gt;"
> action and 'composite' action didn't exist at that time. But with the release
> of 'composite' action it became even easier to write "Setup &lt;tool&gt;" GitHub
> actions and maintaining TypeScript project for this purpose is just a waste and
> toil. So, please use 'composite' action instead.

![GitHub release](https://img.shields.io/github/v/release/fabasoad/typescript-setup-action?include_prereleases)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/fabasoad/typescript-setup-action/main.svg)](https://results.pre-commit.ci/latest/github/fabasoad/typescript-setup-action/main)

Are you going to create a new GitHub action that will set up some tool in a pipeline
and don't know how to start? This template project is exactly for you! All what
you need to do is:

- [Create a new repository from this template project](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
- Follow the [instructions](https://github.com/fabasoad/typescript-setup-action/wiki/How-to-use).
- Done :sunglasses:

This template project is based on [fabasoad/typescript-action](https://github.com/fabasoad/typescript-action)
template repository but with additional logic related to "setup" functionality.
What does it mean actually? It means that you can configure GitHub Action that
will set up some tool in a pipeline. Good examples are [setup-wren-action](https://github.com/fabasoad/setup-wren-action),
[setup-kitten-action](https://github.com/fabasoad/setup-kitten-action), [setup-mint-action](https://github.com/fabasoad/setup-mint-action)
and many others that you can find [here](https://github.com/marketplace?type=actions&query=fabasoad+Setup).

## Wiki

- [How to use](https://github.com/fabasoad/typescript-setup-action/wiki/How-to-use)
- [What you will have out of the box](https://github.com/fabasoad/typescript-setup-action/wiki/What-you-will-have-out-of-the-box)
