<p align="center">
    <a href="https://flmngr.com/"><img src="https://flmngr.com/img/Flmngr.png" alt="Flmngr" width="90" /></a>
</p>

<h1 align="center">Froala file manager</h1>

<p align="center">
    <strong>Flmngr is Froala plugin for managing your image library with an image editor. 30000+ free stock photos 🔥</strong>
</p>

<p align="center">
    <a href="https://flmngr.com/">Home page</a> ∙ <a href="https://flmngr.com/doc/install-froala-plugin/">Install</a> ∙ <a href="https://codepen.io/flmngr/pen/VwEvYMN">Try Online</a>
</p>

<p align="center">
    <a href="https://flmngr.com/">
        <img src="https://n1ed.com/img/screenshots/docs/addons/file-manager/froala-flmngr.jpg" alt="File manager for Froala">
    </a>
</p>

## Intro

This plugin for Froala editor includes Flmngr file manager into it. It will let you choose files and images from your own server file storage and manage all uploads.

Flmngr file manager for Froala supports PHP on server side and includes an image editor.

## Installation

There are just 3 simple steps to start using Froala File Manager: 

### 1. Install the add-on

The [installation](https://flmngr.com/doc/install-froala-plugin) is the same as for any other Froala plugin.

Include this script into your document near the place where you include the main script of Froala:

```javascript
<script src="https://cloud.n1ed.com/v/latest/froala/froala-file-manager.js"></script>
<script src="https://cloud.n1ed.com/v/latest/froala/froala-image-editor.js"></script>
```

### 2. Install server side script

You can read the [documentation](https://flmngr.com/doc/install-file-manager-server-side) for all integrations.

For example let's install [PHP package](https://flmngr.com/doc/install-file-manager-server-php-composer) of the file manager to somewhere on your server by this command:

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
        )
    );
```

See three paths - you need to configure them. We recommend you to use absolute paths (starting with `/` in Unix).

`dirFiles` is publicly (via HTTP) accessed directory, `dirTmp` and `dirCache` are for internal use by file manager and should not be accessed via web (and should not be placed in the `dirFiles`).

#### ...or install it from the ZIP archive

Alternatively, you can install it from the prebuilt [ZIP package](https://flmngr.com/doc/install-file-manager-server-php-script) if you do not use Composer package manager. The example is inside, please configure paths there as described above.

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


## Who we are

[Flmngr](https://flmngr.com) is the file manager developed by [EdSDK](https://edsdk.com) team, whose the primary product is [N1ED](https://n1ed.com).
We work on the tools for WYSIWYG editors such as CKEditor and TinyMCE about 20 years and support Froala now as well.

We've ported Flmngr file manager with image editor to Froala after a number of user requests and hope you will love it and support us by purchasing a commercial license unlocking a lot of handy features.