// gulpfile.mjs

import gulp from 'gulp';
import rename from 'gulp-rename';
import size from 'gulp-size';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageResize from 'gulp-image-resize';

gulp.task("featureImage", () => {
    // Source and destination files
    const files = {
        src: ['./content/**/cover.jpg'],
        dest: ['./content']
    }

    // Gulp task pipe
    return gulp.src(files.src)
        .pipe(size())
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: "feature",
                extname: ".png"
            };
        }))
        .pipe(imageResize({
            width : 1008,
            // height : 100,
            // crop : true,
            // upscale : false
        }))
        .pipe(imagemin({
            progressive: true,
            use: [imageminPngquant({
                speed: 1,  // The lowest speed of optimization with the highest quality
                floyd: 1, // Controls level of dithering (0 = none, 1 = full).
                quality: [0.7, 1] //lossy settings
            })]
        }))
        .pipe(size())
        .pipe(gulp.dest(files.dest));
})

gulp.task("thumbnailImage", () => {
    // Source and destination files
    const files = {
        src: ['./content/**/cover.jpg'],
        dest: ['./content']
    }

    // Gulp task pipe
    return gulp.src(files.src)
        .pipe(size())
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: "thumbnail",
                extname: ".png"
            };
        }))
        .pipe(imageResize({
            width : 213,
            height : 160,
            crop : true,
            upscale : false
        }))
        .pipe(imagemin({
            progressive: true,
            use: [imageminPngquant({
                speed: 1,  // The lowest speed of optimization with the highest quality
                floyd: 1, // Controls level of dithering (0 = none, 1 = full).
                quality: [0.7, 1] //lossy settings
            })]
        }))
        .pipe(size())
        .pipe(gulp.dest(files.dest));
})

gulp.task("shareImage", () => {
    // Source and destination files
    const files = {
        src: ['./content/**/cover.jpg'],
        dest: ['./content']
    }

    // Gulp task pipe
    return gulp.src(files.src)
        .pipe(size())
        .pipe(rename((path) => {
            return {
                dirname: path.dirname,
                basename: "share",
                extname: ".png"
            };
        }))
        .pipe(imageResize({
            width : 100,
            // height : 100,
            // crop : true,
            // upscale : false
        }))
        .pipe(imagemin({
            progressive: true,
            use: [imageminPngquant({
                speed: 1,  // The lowest speed of optimization with the highest quality
                floyd: 1, // Controls level of dithering (0 = none, 1 = full).
                quality: [0.7, 1] //lossy settings
            })]
        }))
        .pipe(size())
        .pipe(gulp.dest(files.dest));
})

gulp.task('default', gulp.parallel("featureImage", "thumbnailImage", "shareImage"));