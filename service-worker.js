/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const CACHE_NAME = 'static-cache';

const FILES_TO_CACHE = [
  '/public/views/offline.html',
  ];
  // '/',
  // '/public/controllers/app.js',
  // '/public/controllers/infoController.js',
  // '/public/controllers/mapController.js',
  // '/public/controllers/searchController.js',
  // '/public/images/campusmap_logo.png',
  // '/public/images/favicon.ico',
  // '/public/images/logo.png',
  // '/public/images/pin-128x128.png',
  // '/public/images/pin-144x144.png',
  // '/public/images/pin-152x152.png',
  // '/public/images/pin-192x192.png',
  // '/public/images/pin-256x256.png',
  // '/public/images/pin-512x512.png',
  // '/public/images/pin.png',
  // '/public/images/rensselaer_logo.png',
  // '/public/images/seal.png',
  // '/public/style/homepage.css',
  // '/public/style/locationInfo.css',
  // '/public/style/searchResults.html',
  // '/public/style/style.css',
  // '/public/views/index.html',
  // '/public/views/info.html',
  // '/public/views/machine_sites_info.html',
  // '/public/views/searchResults.html',
  // '/public/geolocations.js',
  // '/public/imagePreview.js',
  // '/public/infoPreview.php',
  // '/public/machine_sites.js',
  // '/public/manifest.json',
  // '/public/map.js',
  // '/campusmap.sql',
  // '/geolocations.json',
  // '/machine_sites.json',
// ];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
      fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('/public/views/offline.html');
                });
          })
  );
});
