/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/telegram-react/1.6c401ab23349ce7bcf14.worker.js","e49743f8ddae3a33bc8e8c298a25a748"],["/telegram-react/1.b70ef2d8bc9dee22cf58.worker.js","eb1440b5a3bf957d6e3c09bbc1b2d7a6"],["/telegram-react/2a79a539dfbe607fd685d6ccdd16b5df.wasm","2a79a539dfbe607fd685d6ccdd16b5df"],["/telegram-react/3dee0f934ca1a5946a253599e3e442c6.wasm","3dee0f934ca1a5946a253599e3e442c6"],["/telegram-react/6c401ab23349ce7bcf14.worker.js","ee4dc48dc684a95d5436894cfad352b6"],["/telegram-react/Android_2x.jpg","eb8506aef9761972b129f60f9ac7fd70"],["/telegram-react/Manytabs_2x.png","7a71629a5e4f7482b6320b103f1d543c"],["/telegram-react/WP_2x.jpg","a1d37d509e6740f40c0a4729dff3100b"],["/telegram-react/b70ef2d8bc9dee22cf58.worker.js","6c306eb9440784f01337f98b638121f6"],["/telegram-react/d6e29502cb97a72c1880.worker.js","44cff9936be39ea2f79d46fc6c392b56"],["/telegram-react/data/Folders_1.json","01b7f0acf52990784baca0a19b821be3"],["/telegram-react/data/Folders_2.json","3f6c9400e50344c82b15a7acf5087a33"],["/telegram-react/data/TwoFactorSetupMonkeyClose.json","c322e3eabf46340f12ec7f4784d4115a"],["/telegram-react/data/TwoFactorSetupMonkeyIdle.json","b2c77121d458e17d18e642c51cb9821c"],["/telegram-react/data/TwoFactorSetupMonkeyPeek.json","d914e5d5fdef6b5596bb409689c8332d"],["/telegram-react/data/TwoFactorSetupMonkeyTracking.json","addf1beac01749387f1aea96a9bfb682"],["/telegram-react/data/countries.txt","ee138ade20255da9a4a5c7727a4b731c"],["/telegram-react/emoji-mart.dark.css","cda63f0ddb31e11af14b44a003d2ef7a"],["/telegram-react/emoji-mart.light.css","2ac73d5c98ad88b6e4d0f66b0a6b4a58"],["/telegram-react/fa6295f8bac86fc2c967.worker.js","9e90976f6e4cdaa1388e53cf17ef511d"],["/telegram-react/iOS_2x.jpg","1d95f349db03f730edb3bc35224a303e"],["/telegram-react/index.html","477740d2ad29d616ee6399a878b28a17"],["/telegram-react/libwebp/webp_wasm.js","3d9cf139a6fe02ffe08860ddb682de41"],["/telegram-react/libwebp/webp_wasm.wasm","7923e6d27dbf3a355044bd27863ae331"],["/telegram-react/libwebp/webp_wasm.worker.js","e94066e473d75366d69425584bfb9d20"],["/telegram-react/rlottie/pako-inflate.min.js","d96df6d3267de8b84701993460b26e83"],["/telegram-react/rlottie/rlottie-wasm.js","f8181c4c45a700482cc52b7c9d200a3f"],["/telegram-react/rlottie/rlottie-wasm.wasm","e725dc036ad50ba694c90ee1f72c4b5b"],["/telegram-react/rlottie/rlottie-wasm.worker.js","152367fd468cbf2fb1b11f82427294ae"],["/telegram-react/static/css/0.9b2f7aac.chunk.css","e60f481e6f91800323f00deedc3eb5d7"],["/telegram-react/static/css/4.0684da42.chunk.css","8457f5bb15126f1a8246f0d7f4c20b9d"],["/telegram-react/static/css/5.c61ffb77.chunk.css","1856e11f5c66b19a409101b683b2fbfd"],["/telegram-react/static/css/7.4c27677e.chunk.css","7f7c7c12c13b765647d473ce96525b52"],["/telegram-react/static/css/main.a1c553f4.chunk.css","7ff2d693055c83bc005ead112a3ca8e0"],["/telegram-react/static/js/0.3ff17e87.chunk.js","51739344a10d4f6960ad0cf02dca6485"],["/telegram-react/static/js/3.504c16d9.chunk.js","0059dbbeddc954f3794e3bd35c910e1f"],["/telegram-react/static/js/4.ebb02600.chunk.js","549cca506f16038b5f94064c992e2ad6"],["/telegram-react/static/js/5.5e87e0d3.chunk.js","561a8734e1194766a8974968ed9b51da"],["/telegram-react/static/js/6.91934930.chunk.js","464abd05cba6e7c8113080a9ea20164f"],["/telegram-react/static/js/7.5a109537.chunk.js","2fc419c03da75fa1ebd7b781958ae4e4"],["/telegram-react/static/js/main.cff2f82e.chunk.js","eec7a8e4e2ed70bdde160ab6bb76aba5"],["/telegram-react/static/js/runtime~main.0f089991.js","7d18b222c8fdc99648fea96c9d7bf533"],["/telegram-react/static/media/bubble-tail-left.c6a92d89.svg","c6a92d89aa71027ea621d52bb03ad681"],["/telegram-react/static/media/camomile_blurred.bcf11246.jpg","bcf112461b322d3b888e4eb550e3386a"],["/telegram-react/static/media/check.fb38f7d6.svg","fb38f7d6fbf79f207edfa158c10f16a7"],["/telegram-react/static/media/telegram-logo.8e3f975b.svg","8e3f975b0dac0d7ddc9f5ab85f24d15a"],["/telegram-react/tdweb.js","3aa8950a497baaec48e884ec8495ad12"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/./];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__).*"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    // console.log("[SW] fetch url " + url, shouldRespond);
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              let url = event.request.url;
                // console.log("[SW] found cached url " + url);
                /*if (url.indexOf(".wasm") > -1) {
                  console.log("[SW] wasm not modified");
                  let responseInit = {
                    status: 304,
                    statusText: 'Not Modified'
                  };
                  let notModifiedResponse = new Response('', responseInit);
                  return notModifiedResponse;
                }*/

              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("./custom-service-worker.js");
