---
# [Front Matter Formats](https://gohugo.io/content-management/front-matter/)
title: "Actix Web - Routes"
description: "Boilerplate setup for Actix Web routes"
keywords:
  - Rust
  - Actix
  - Actix-Web
  - API
date: 2023-12-10
publishDate: 2023-12-10
lastmod: 2023-12-10 
slug: rust-actix-web-routes
# aliases:
# - old_url_path
# - another_old_ulr_path
# categories:
# - category_1
# - category_2
# series:
# -  series 1
tags:
  - "Rust"
  - "API"
  - "Actix-Web"
draft: false
# Template specific - Minimo Theme
cover:
  image: /images/covers/cover-old-typewriter.png
  caption: "Old Typewritter"
  style: full
---

Note to future self regarding routing set up for Actix Web.

```sh
cargo new actix_web_routes
```

```sh
cargo add actix-web env_logger log
```

```sh
cargo add serde --features derive
```

```rust 

#![allow(clippy::needless_return)]
use actix_web::{middleware::Logger, web, App, HttpServer};

pub mod routes {

    pub mod things {
        use actix_web::{get, web, HttpResponse, Responder};
        use serde::Deserialize;

        pub const PAGE_DEFAULT: u64 = 1;
        pub const PER_PAGE_DEFAULT: u64 = 10;

        #[derive(Deserialize, Copy, Clone)]
        pub struct ThingsQueryParams {
            pub page: Option<u64>,
            pub per_page: Option<u64>,
        }

        impl ThingsQueryParams {
            pub fn get_pagination(self) -> (u64, u64) {
                let page = self.page.unwrap_or(PAGE_DEFAULT);
                let per_page = self.per_page.unwrap_or(PER_PAGE_DEFAULT);

                (page, per_page)
            }
        }

        #[get("")]
        pub async fn get_things(query: web::Query<ThingsQueryParams>) -> impl Responder {
            let (page, per_page) = query.get_pagination();

            let message = format!("The Query {:?} of things from page:{:?}", per_page, page);

            log::info!("{:?}", message);

            return HttpResponse::Ok().body(message);
        }

        #[get("{id}")]
        pub async fn get_things_id(path: web::Path<u32>) -> impl Responder {
            let thing_id = path.into_inner();
            let message = format!("Geth thing_id:{}", thing_id);

            log::info!("Get things_id:{}", thing_id);

            return HttpResponse::Ok().body(message);
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;

        #[test]
        fn test_get_pagination_with_all() {
            let query = things::ThingsQueryParams {
                page: Some(45),
                per_page: Some(54),
            };

            let (page, per_page) = query.get_pagination();

            assert_eq!(45, page);
            assert_eq!(54, per_page);
        }

        #[test]
        fn test_get_pagination_with_page() {
            let query = things::ThingsQueryParams {
                page: Some(45),
                per_page: None,
            };

            let (page, per_page) = query.get_pagination();

            assert_eq!(45, page);
            assert_eq!(things::PER_PAGE_DEFAULT, per_page);
        }

        #[test]
        fn test_get_pagination_with_per_page() {
            let query = things::ThingsQueryParams {
                page: None,
                per_page: Some(54),
            };

            let (page, per_page) = query.get_pagination();

            assert_eq!(things::PAGE_DEFAULT, page);
            assert_eq!(54, per_page);
        }

        #[test]
        fn test_get_pagination_with_none() {
            let query = things::ThingsQueryParams {
                page: None,
                per_page: None,
            };

            let (page, per_page) = query.get_pagination();

            assert_eq!(things::PAGE_DEFAULT, page);
            assert_eq!(things::PER_PAGE_DEFAULT, per_page);
        }
    }
}

pub mod v1_api {
    use crate::routes;
    use actix_web::web;

    pub fn routes(config: &mut web::ServiceConfig) {
        config.service(
            web::scope("/things")
                .service(routes::things::get_things)
                .service(routes::things::get_things_id),
        );
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .service(web::scope("/api/v1").configure(v1_api::routes))
    })
    .bind(("127.0.0.1", 8083))?
    .run()
    .await
}
```
