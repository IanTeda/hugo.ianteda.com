# hugo.ianteda.com

Hugo static website for www.ianteda.com


## Run Hugo development server

cd into the site folder

```bash
hugo server --noHTTPCache --disableFastRender  
```

## Demo a Hugo Theme

cd in theme example dir

```bash
cd theme/awesome/exampleSite
```

Run hugo server with theme

```bash
hugo serve  --themesDir ../..
```

## Figure Short Code

```md
{{< 
    figure src="image-bundle-name.jpg"  link="http://link-to-follow" 
    attr="Figure Title" class="align-center" attrlink="http://link to follow" 
>}}
```

## Theme

* [Minimo Theme](https://github.com/MunifTanjim/minimo)
