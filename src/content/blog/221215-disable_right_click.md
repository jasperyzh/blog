---
title: how to disable right click on website
description: Disable right-click on your website
pubDate: 221215
author: jy
category: WebDev
tag: [js, snippet]
---

## how to disable right click on website

To disable right-click on your website, you can use a JavaScript code snippet to intercept the right-click event and prevent it from triggering the default browser menu. Here is an example of how you can do this:

```
<script>
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
</script>
```

This code will prevent the default right-click menu from appearing when a user right-clicks on your website. Note that this method is not foolproof and some users may still be able to access the menu using other methods. Additionally, some users may find this behavior frustrating and it may negatively impact the user experience on your site. Therefore, it's important to consider the potential drawbacks before implementing this method.

## disable all right click on images?

```
<script>
document.addEventListener("contextmenu", function(e){
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
    }
}, false);
</script>
```
