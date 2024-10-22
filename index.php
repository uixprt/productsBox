<?php
$uri = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
if ($uri == 'https://elemexam.xyz/new/' || $uri == 'http://elemexam.xyz/new/') {
  header('Location: ' . 'https://v2.elemexam.xyz/', true, 301);
}
$base_path = '/';
$api_base_url = '/api';
?>
<!doctype html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ElemExam by Elemsecret</title>
    <link rel="icon" href="<?php echo $base_path; ?>public/images/favicon.png" sizes="32x32">
    <meta name='robots' content='max-image-preview:large'/>
    <link rel='dns-prefetch' href='//fonts.googleapis.com'/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900">
    <link rel="stylesheet" href="<?php echo $base_path; ?>public/styles/main.css">
</head>
<body class="home page app-data index-data singular-data page-data page-5-data page-home-data front-page-data">
<header class="ee-header">
    <nav class="ee-header__nav ee-container">
        <a class="ee-logo" href="/">
            <h1>
                <span class="ee-logo__elem">Elem</span><span
                    class="ee-logo__exam">exam</span>
                <small class="ee-logo__by">By Elemsecret</small>
            </h1>
        </a>
    </nav>
</header>
<main class="ee-main">
    <div class="ee-hero">
        <div class="ee-container">
            <div class="ee-hero__container">
                <h2 class="ee-hero__title">
                    Ride Free with Tesla </h2>
                <p class="ee-hero__subtitle">
                    And accelerate the world’s transition to sustainable energy </p>
            </div>
        </div>
    </div>
    <div id="eeProducts" class="ee-products">
        <div class="ee-container">
            <div class="ee-products__container">
                <div class="ee-products__item">
                    <h2 class="ee-products__title">
                        Tesla Model 3
                    </h2>
                    <img width="1024" height="640" src="<?php echo $base_path; ?>public/images/tesla-m3-1024x640.jpeg"
                         class="attachment-large size-large wp-post-image" alt="" loading="lazy"
                         srcset="<?php echo $base_path; ?>public/images/tesla-m3-1024x640.jpeg 1024w, <?php echo $base_path; ?>public/images/tesla-m3-300x188.jpeg 300w, <?php echo $base_path; ?>public/images/tesla-m3-768x480.jpeg 768w, <?php echo $base_path; ?>public/images/tesla-m3-1536x960.jpeg 1536w, <?php echo $base_path; ?>public/images/tesla-m3-2048x1280.jpeg 2048w"
                         sizes="(max-width: 1024px) 100vw, 1024px">
                    <div class="ee-products__footer">
                        <a class="ee-products__button ee-button ee-button--outline"
                           href="#"
                           data-product-id="652">
                            Read Description
                        </a>
                    </div>
                </div>
                <div class="ee-products__item">
                    <h2 class="ee-products__title">
                        Tesla Model S
                    </h2>
                    <img width="1024" height="640" src="<?php echo $base_path; ?>public/images/tesla-ms-1024x640.jpeg"
                         class="attachment-large size-large wp-post-image" alt="" loading="lazy"
                         srcset="<?php echo $base_path; ?>public/images/tesla-ms-1024x640.jpeg 1024w, <?php echo $base_path; ?>public/images/tesla-ms-300x188.jpeg 300w, <?php echo $base_path; ?>public/images/tesla-ms-768x480.jpeg 768w, <?php echo $base_path; ?>public/images/tesla-ms-1536x960.jpeg 1536w, <?php echo $base_path; ?>public/images/tesla-ms-2048x1280.jpeg 2048w"
                         sizes="(max-width: 1024px) 100vw, 1024px">
                    <div class="ee-products__footer">
                        <a class="ee-products__button ee-button ee-button--outline"
                           href="#"
                           data-product-id="651">
                            Read Description
                        </a>
                    </div>
                </div>
                <div class="ee-products__item">
                    <h2 class="ee-products__title">
                        Tesla Model X
                    </h2>
                    <img width="1024" height="640" src="<?php echo $base_path; ?>public/images/tesla-mx-1024x640.jpeg"
                         class="attachment-large size-large wp-post-image" alt="" loading="lazy"
                         srcset="<?php echo $base_path; ?>public/images/tesla-mx-1024x640.jpeg 1024w, <?php echo $base_path; ?>public/images/tesla-mx-300x188.jpeg 300w, <?php echo $base_path; ?>public/images/tesla-mx-768x480.jpeg 768w, <?php echo $base_path; ?>public/images/tesla-mx-1536x960.jpeg 1536w, <?php echo $base_path; ?>public/images/tesla-mx-2048x1280.jpeg 2048w"
                         sizes="(max-width: 1024px) 100vw, 1024px">
                    <div class="ee-products__footer">
                        <a class="ee-products__button ee-button ee-button--outline"
                           href="#"
                           data-product-id="647">
                            Read Description
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="eePopup" class="ee-popup">
        <div class="ee-popup__container">
            <div class="ee-popup__header">
                <h2 id="eePopupTitle" class="ee-popup__title"></h2>
                <button id="eePopupCloseBtn" class="ee-popup__close-btn">
                    close
                </button>
            </div>
            <div class="ee-popup__body">
                <div id="eePopupContent" class="ee-popup__content"></div>
            </div>
        </div>
    </div>
</main>
<footer class="ee-footer">
    This website was built for demonstration purposes only by <a href="https://uixprt.com" target="_blank">@uixprt</a>.
</footer>
<script type='text/javascript'>
    /* <![CDATA[ */
    var main = {"apiBaseUrl": "<?php echo $api_base_url ?>"};
    /* ]]> */
</script>
<script defer src="public/scripts/main.js"></script>
</body>
</html>

