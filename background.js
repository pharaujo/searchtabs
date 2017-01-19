(function() {

// simplistic fuzzy search algorithm from SO
// TODO implement better algorithm
// source: http://stackoverflow.com/a/15252131/199021
String.prototype.fuzzy = function (s) {
    var hay = this.toLowerCase(), i = 0, n = -1, l;
    s = s.toLowerCase();
    for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
};

///////////////////////////////////////////////////////////////////////
// Set of functions to convert some symbols to html entities
// source: http://stackoverflow.com/a/5499821/199021

var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
}

function safe(str) {
    return str.replace(/[&<>]/g, replaceTag);
}

///////////////////////////////////////////////////////////////////////

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    // console.log('inputChanged: ' + text);

    chrome.tabs.query({windowType: "normal"}, function(tabs) {
      // reduce tab list to only have tabs we're interested in
      var suggestions = tabs.reduce(function(result, tab) {
        // remove anything up to and including the schema from the url
        var url = tab.url.replace(/^.*https?:\/\//, '');
        // if text fuzzy-matches title or url, add to result array
        if(tab.title.fuzzy(text) || url.fuzzy(text)) {
          return result.concat({content: ""+tab.id, description: safe(tab.title)});
        } else {
          return result;
        }
      }, []);
      // console.log(suggestions);
      suggest(suggestions);
    });
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    // console.log('inputEntered: ' + text);
    // make selected tab active
    chrome.tabs.update(parseInt(text, 10), {active: true}, function(tab) {
      // focus window with selected tab
      chrome.windows.update(tab.windowId, {focused: true});
    });
  });

})();

