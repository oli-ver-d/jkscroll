chrome.runtime.onMessage.addListener(cmd => {
  switch(cmd){
    case 'w':
      // close active tab
      browser.tabs.query({currentWindow: true, active: true})
        .then(tab => browser.tabs.remove(tab[0].id))
    break;
    case 't':
      browser.tabs.query({active: true, currentWindow: true})
        .then(tabs => {
          const currentTab = tabs[0];
          return browser.tabs.create({index: currentTab.index + 1,
          });
        })
        .catch(err => console.error("Failed to create new tab:", err));
    break;
    case 'u':
      // restore previous closed tab
      browser.sessions.getRecentlyClosed({maxResults: 1})
        .then(s => browser.sessions.restore(s[0].sessionId))
    break;
    case 'h':
    case 'l':
      // move focus to next or previous tab
      browser.tabs.query({currentWindow: true})
        .then(tabs => {
          const direction = cmd === 'h' ? -1 : +1
          const activeIndex = tabs.find(tab => tab.active).index
          // allow cycling through tabs
          const futureActiveIndex = (activeIndex + direction + tabs.length) % tabs.length
          browser.tabs.update(tabs[futureActiveIndex].id, {active: true})
        })
    break;
  }
})
