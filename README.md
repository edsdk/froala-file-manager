# File Manager for Froala

[See on GitHub](https://github.com/edsdk/froala-file-manager)

![File manager for Froala](https://n1ed.com/img/screenshots/docs/addons/file-manager/froala-flmngr.jpg)

[See demo](https://codepen.io/N1ED/pen/poNwPgo)

This plugin for Froala editor includes Flmngr file manager into it. It will let you choose files and images from your own server file storage and manage all uploads.

Flmngr file manager for Froala supports PHP on server side and can be easily extended with [Image Editor for Froala](https://froala-image-editor.com).

## Installation

There are just 3 simple steps to start using Froala File Manager: 

### 1. Install the add-on

The installation is the same as for any other Froala plugin.

Include this script into your document near the place where you include the main script of Froala:

```javascript
<script src="https://cdn.jsdelivr.net/gh/edsdk/froala-file-manager@latest/js/froala-file-manager.js"></script>
```

### 2. Install server side script

Install [PHP package](https://packagist.org/packages/edsdk/flmngr-server-php) of the file manager to somewhere on your server by this command:

```sh
composer require edsdk/flmngr-server-php
```
 
and then call it in the URL handler you need like:

```php
<?php

    require __DIR__ . '/vendor/autoload.php';
        
    use EdSDK\FlmngrServer\FlmngrServer;
    
    // Uncomment line below to enable CORS if your request domain and server domain are different
    // header('Access-Control-Allow-Origin: *');
    
    FlmngrServer::flmngrRequest(
        array(
            'dirFiles' => 'path-to/files',
            'dirTmp'   => 'path-to/tmp',
            'dirCache'   => 'path-to/cache'
        )
    );
```

See three paths - you need to configure them. We recommend you to use absolute paths (starting with `/` in Unix).

`dirFiles` is publicly (via HTTP) accessed directory, `dirTmp` and `dirCache` are for internal use by file manager and should not be accessed via web (and should not be placed in the `dirFiles`).

#### ...or install it from the ZIP archive

Alternatively, you can install it from the prebuilt [ZIP package](https://n1ed.com/download/flmngr-php.zip) if you do not use Composer package manager. The example is inside, please configure paths there as described above.

### 3. Link add-on to server side script

When you initialize Froala, please pass extra configuration for Flmngr file manager:

```javascript
FroalaEditor('#editor', {
    Flmngr: {
        urlFileManager: '/url/to/flmngr.php',
        urlFiles: '/url/to/dirFiles/'
    }
});
```

That's all.


## Configuration

All the parameters you pass to Flmngr should be wrapped with `Flmngr` section like in the installation sample above. And here is the list of available parameters:

**`urlFileManager`** (*required*)
\
An URL of the PHP script handling all the requests to the server from Froala file manager. This is the URL of the script you've installed on the second step of the installation manual.

**`urlFiles`** (*required*)
\
An URL prefix which will be used to generate full URL to uploaded and inserted files. Should link to the directory you specified in the second step of installation as `dirFiles` (you specified directory on disc for server script, and not you specify which URL is associated with this directory). *Please use absolute URL prefix here to avoid Froala-specifix issue (it thinks URLs starting with "/" are external and tries to relocate image without a need).*

**`defaultUploadDir`**
\
A subdirectory related to the root of your storage (`dirFiles`) where all the quick uploads will be placed to. The default value is `/` meaning uploading to the root of your storage directory.

**`apiKey`**
\
Premium users need to specify their API key to use all the power of Flmngr file manager for Froala.


## Pricing

Flmngr comes together with ImgPen image editor and requires the annual subscription with the price of **$99 and lower** per website depending on the number of websites you use it on. Please install Flmngr plugin into your Froala and it will lead you to payment.

*Note*: one license is for one domain you publish content on (not for the domain used for editing). One domain is limited with 15 users (special pricing for big projects). We successfully collaborate with SaaS projects and will give you discounted bulk pricing - just ask for a quote writing to [support](mailto:support@n1ed.zendesk.com).

## Who we are

Flmngr is the file manager developed by [EdSDK/N1ED](https://n1ed.com) team.
We work on the tools for WYSIWYG editors such as CKEditor and TinyMCE for about 10 years.

We've ported Flmngr file manager and [ImgPen image editor](https://froala-image-editor.com) to Froala after a number of user requests and hope you will love it and support us by purchasing a commercial license.