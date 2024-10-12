// Optional background script if you want to keep track of detected patterns
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'dark_pattern_detected') {
      console.log('Dark pattern detected on', sender.tab.url);
    }
  });
  