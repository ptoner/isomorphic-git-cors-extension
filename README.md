# Isomorphic Git CORS Extension

A simple Chrome extension to add CORS headers to GitLab/GitHub requests. 

Allows [Isomorphic Git](https://github.com/isomorphic-git/isomorphic-git) to push to GitLab and GitHub without CORS issues.

Uses Chrome's [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest) to enable this with a simple rule-based approach and no executable code. 