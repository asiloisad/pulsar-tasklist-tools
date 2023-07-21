# tasklist-tools

<p align="center">
  <a href="https://github.com/bacadra/atom-tasklist-tools/tags">
  <img src="https://img.shields.io/github/v/tag/bacadra/atom-tasklist-tools?style=for-the-badge&label=Latest&color=blue" alt="Latest">
  </a>
  <a href="https://github.com/bacadra/atom-tasklist-tools/issues">
  <img src="https://img.shields.io/github/issues-raw/bacadra/atom-tasklist-tools?style=for-the-badge&color=blue" alt="OpenIssues">
  </a>
  <a href="https://github.com/bacadra/atom-tasklist-tools/blob/master/package.json">
  <img src="https://img.shields.io/github/languages/top/bacadra/atom-tasklist-tools?style=for-the-badge&color=blue" alt="Language">
  </a>
  <a href="https://github.com/bacadra/atom-tasklist-tools/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/bacadra/atom-tasklist-tools?style=for-the-badge&color=blue" alt="Licence">
  </a>
</p>

A set of tools to work with tasklist. A grammar has been provided by [language-tasklist](https://github.com/bacadra/atom-language-tasklist) package.

Press `Alt-Enter` or middle click to toggle state of tasks or create it if doesn't exists.

## Installation

### Atom Text Editor

The official Atom packages store has been [disabled](https://github.blog/2022-06-08-sunsetting-atom/). To obtain the latest version, please run the following shell command:

```shell
apm install bacadra/atom-tasklist-tools
```

This will allow you to directly download the package from the GitHub repository.

### Pulsar Text Editor

The package is compatible with [Pulsar](https://pulsar-edit.dev/) and can be installed using the following command:

```shell
ppm install bacadra/atom-tasklist-tools
```

Alternatively, you can directly install [tasklist-tools](https://web.pulsar-edit.dev/packages/tasklist-tools) from the Pulsar package store.

## List of commands

A command are available in `atom-text-editor:not([mini])`, but shortcuts are preset only in `atom-text-editor[data-grammar~="tasklist"]:not([mini])` space.

| Shortcut | Command | Description |
| -: | - | - |
| <div style="white-space:nowrap">`Alt-Enter`</div> | <div style="white-space:nowrap">`&:toggle`</div> | add or toggle tick of selected tasks by `▷` `☐` `•` -> `✔` -> `✘` -> `☐` cycle |
| <div style="white-space:nowrap">`Alt-/`</div> | <div style="white-space:nowrap">`&:high`</div> | add or change tick of selected tasks as `▷` |
| <div style="white-space:nowrap">`Alt-*`</div> | <div style="white-space:nowrap">`&:todo`</div> | add or change tick of selected tasks as `☐` |
| <div style="white-space:nowrap">`Alt-+`</div> | <div style="white-space:nowrap">`&:done`</div> | add or change tick of selected tasks as `✔` |
| <div style="white-space:nowrap">`Alt--`</div> | <div style="white-space:nowrap">`&:fail`</div> | add or change tick of selected tasks as `✘` |
| <div style="white-space:nowrap">`Alt-.`</div> | <div style="white-space:nowrap">`&:info`</div> | add or change tick of selected tasks as `•` |
| | <div style="white-space:nowrap">`&:translate`</div> | translate markdown-style ticks and bullets to tasklist-style, e.g. `- [ ]` -> `☐`, `* [X]` -> `✔` |

## Status-bar

![status-bar](https://github.com/bacadra/atom-tasklist-tools/blob/master/assets/status-bar.png?raw=true)

Status-bar has counter of each task type. Click on it to move cursor to next one.

# Contributing [🍺](https://www.buymeacoffee.com/asiloisad)

If you have any ideas on how to improve the package, spot any bugs, or would like to support the development of new features, please feel free to share them via GitHub.
