# jk scroll
vim inspired shortcuts for your [browser](https://addons.mozilla.org/en-US/firefox/addon/jk-scroll/) by [@h43z](https://twitter.com/h43z). Edited by Oliver Dennis to swap the n and p with the h and l keys.

Many browser extensions have permissions that grant them full access to every
website you visit and often they need to. And so does this one.

BUT this extension only has 90 (not anymore, soowwy) lines of code that everyone
can check and verify for themselves.

Extend it if you need more functionality.

Shortcut list
```
// content-script.js
j       => scroll down
k       => scroll up
l       => focus tab to the right (next)
h       => focus tab to the left (previous)
t       => reopen last closed tab
w       => close tab
Escape  => remove focus from active element
G       => go to bottom of page
gg      => go to top of page
r       => reload tab
Enter   => click on selected text (useful for / and CTRL+f search)
i       => focus next Input element
p       => go back one page in history (if end reached closes tab)
n       => go forward one page in history


// background-script.js
// this functionality needs the browser extension API.
// Only so called background scripts have access to it.
w     => close tab
t     => new tab
u     => reopen last closed tab
```

To disable jkscroll for a specific website create a localStorage item with the
name of `jkdisable` and some truthy value.

Run `sh create-extension.sh` and install `jk-extension.zip` manually in your
browsers addons/extension section.

So far the commands in  `background-script` won't work in `google-chrome`.
Replace the `browser` keyword with `chrome` and change the code from using
`promises` into callbacks. That should do the trick.
