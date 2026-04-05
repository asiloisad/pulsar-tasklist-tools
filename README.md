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

Commands available in `atom-text-editor[data-grammar~="tasklist"]:not([mini])`:

- `tasklist-tools:toggle-tick`: (default <kbd>Alt+Enter</kbd>) add or toggle tick of selected tasks by `▷` `☐` `•` -> `✔` -> `✘` -> `☐` cycle,
- `tasklist-tools:set-as-high`: <kbd>Alt+/</kbd> add or change tick of selected tasks as `▷`,
- `tasklist-tools:set-as-todo`: <kbd>Alt+*</kbd> add or change tick of selected tasks as `☐`,
- `tasklist-tools:set-as-done`: <kbd>Alt++</kbd> add or change tick of selected tasks as `✔`,
- `tasklist-tools:set-as-fail`: <kbd>Alt+-</kbd> add or change tick of selected tasks as `✘`,
- `tasklist-tools:set-as-info`: <kbd>Alt+.</kbd> add or change tick of selected tasks as `•`,
- `tasklist-tools:go-to-next-tick`: navigate to next tick of any type with wraparound,
- `tasklist-tools:go-to-next-high`: navigate to next `▷` tick with wraparound,
- `tasklist-tools:go-to-next-todo`: navigate to next `☐` tick with wraparound,
- `tasklist-tools:go-to-next-done`: navigate to next `✔` tick with wraparound,
- `tasklist-tools:go-to-next-fail`: navigate to next `✘` tick with wraparound,
- `tasklist-tools:go-to-next-info`: navigate to next `•` tick with wraparound,
- `tasklist-tools:translate-markdown`: translate markdown-style ticks and bullets to tasklist-style,
- `tasklist-tools:move-items-to-next-header`: move selected items to next header,
- `tasklist-tools:move-items-to-last-header`: move selected items to last header,
- `tasklist-tools:move-to-next-header`: set cursor position equal to next header,
- `tasklist-tools:move-to-previous-header`: set cursor position equal to previous header,
- `tasklist-tools:move-to-last-header`: set cursor position equal to last header.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
