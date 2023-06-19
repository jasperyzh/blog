---
title: Bulk convert & serve .WebP image for WordPress Website
description: Tired of restricted by webp plugins, I have figured out a manual way to install .webp format
pubDate: 230615
image: {
  src: "/assets/placeholder.jpg",
  alt: "A picture of a coder",
}
draft: false
tag: webdev
---

Tired of restricted by webp plugins, I have figured out a manual way to install .webp format

1. using ffmpeg to convert all .jpg/.png into .webp
2. use bash .sh to find each image, and convert in bulk
3. Test if both image format (.jpg/.webp) are accessible via URL
4. .htaccess add the following 



## Onto WordPress

.htaccess / apache is still an unknown to me as I have never dive deeper than simple rewrite for WordPress and redirect.

In this case, we will have the server to serve .webp if the .jpg|.png|.gif file have .webp next to it.

So when the website is loading the image, it will be intecept and load the *image/webp* instead.


```
<IfModule mod_rewrite.c>
RewriteEngine On

# Extract the subdirectory from REQUEST_URI
# Took me hours to solve this as the path misalign as my wordpress root is on "/localhost/wordpress", and %{DOCUMENT_ROOT} does not includes the subdirectory
RewriteCond %{REQUEST_URI} ^(/[^/]+/)
RewriteRule ^ - [E=SUBDIR:%1]

# Check if browser supports WebP images
RewriteCond %{HTTP_ACCEPT} image/webp

# Check if WebP replacement image exists
RewriteCond %{DOCUMENT_ROOT}%{ENV:SUBDIR}$1.webp -f

# Serve WebP image instead
RewriteRule (.+)\.(jpe?g|png|gif)$ $1.webp [T=image/webp,E=REQUEST_image]
</IfModule>

<IfModule mod_headers.c>
# Vary: Accept for all the requests to jpeg, png and gif
Header append Vary Accept env=REQUEST_image
</IfModule>

<IfModule mod_mime.c>
AddType image/webp .webp
</IfModule>
```
Source: [WebP images with htaccess](https://github.com/vincentorback/WebP-images-with-htaccess)