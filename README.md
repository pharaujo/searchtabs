# SearchTabs

Chrome extension for searching tabs on any window.

## Motivation

Right now I'm using 9 Chrome windows with a dozen tabs each. I clearly lack some browser window/tabs organization skills and always need to go searching manually for the tabs I know I have opened somewhere.

I developed this extension to scratch my particular itch, using the minimal amount of code necessary (not having to write UI components was also a plus).

## Installation

From the [Chrome extensions getting started guide](https://developer.chrome.com/extensions/getstarted):

  - Visit `chrome://extensions` in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox: The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

  - Ensure that the Developer mode checkbox in the top right-hand corner is checked.

  - Click Load unpacked extension… to pop up a file-selection dialog.

  - Navigate to the directory in which your extension files live, and select it.

Alternatively, you can drag and drop the directory where your extension files live onto `chrome://extensions` in your browser to load it.

## Using

Jump to address bar (<kbd>Ctrl</kbd>+<kbd>L</kbd> on Windows and Linux, <kbd>Cmd</kbd>+<kbd>L</kbd> on the Mac) and type `tab` followed by <kbd>Space</kbd> or <kbd>Tab</kbd> to activate the extension.

It will do a fuzzy search of tab titles and urls for the search term you type in all normal browser windows (meaning, no popups or developer tools). Select the tab you want and press <kbd>Enter</kbd>.

Also of note, it will only search incognito windows if you give the extension permission to load on them.

## Release status

Working prototype, not released in the Google Chrome WebStore.

## License

MIT License, see [LICENSE](LICENSE).
