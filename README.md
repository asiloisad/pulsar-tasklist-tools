# tasklist-tools

Task state management and navigation commands for tasklist files. Requires a grammar package such as [language-tasklist](https://github.com/asiloisad/pulsar-language-tasklist).

![status-bar](https://github.com/asiloisad/pulsar-tasklist-tools/blob/master/assets/status-bar.png?raw=true)

## Features

- **Task toggling**: Cycle through task states with keyboard or middle-click.
- **Quick state commands**: Set tasks directly to high, todo, done, fail, or info.
- **Header navigation**: Jump between headers or move items to headers.
- **Status bar counter**: Shows task counts by type with click-to-navigate.
- **Markdown translation**: Convert markdown checkboxes to tasklist format.
- **Navigation panel**: Outline support via [navigation-panel](https://github.com/asiloisad/pulsar-navigation-panel).

## Installation

To install `tasklist-tools` search for [tasklist-tools](https://web.pulsar-edit.dev/packages/tasklist-tools) in the Install pane of the Pulsar settings or run `ppm install tasklist-tools`. Alternatively, you can run `ppm install asiloisad/pulsar-tasklist-tools` to install a package directly from the GitHub repository.

## Commands

Commands available in `atom-text-editor:not([mini])`. Keybindings work only in `atom-text-editor[data-grammar~="tasklist"]:not([mini])`:

- `tasklist-tools:toggle`: (`Alt+Enter`) add or toggle tick of selected tasks by `▷` `☐` `•` -> `✔` -> `✘` -> `☐` cycle,
- `tasklist-tools:high`: (`Alt+/`) add or change tick of selected tasks as `▷`,
- `tasklist-tools:todo`: (`Alt+*`) add or change tick of selected tasks as `☐`,
- `tasklist-tools:done`: (`Alt++`) add or change tick of selected tasks as `✔`,
- `tasklist-tools:fail`: (`Alt+-`) add or change tick of selected tasks as `✘`,
- `tasklist-tools:info`: (`Alt+.`) add or change tick of selected tasks as `•`,
- `tasklist-tools:translate`: translate markdown-style ticks and bullets to tasklist-style,
- `tasklist-tools:move-items-to-next-header`: move selected items to next header,
- `tasklist-tools:move-items-to-last-header`: move selected items to last header,
- `tasklist-tools:move-to-next-header`: set cursor position equal to next header,
- `tasklist-tools:move-to-previous-header`: set cursor position equal to previous header,
- `tasklist-tools:move-to-last-header`: set cursor position equal to last header.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
