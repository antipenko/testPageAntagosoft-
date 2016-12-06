'use strict';
 /* * * Объявляем переменные * */ 
 var gulp = require('gulp'), 
 	sass = require('gulp-sass'), 
 	watch = require('gulp-watch'), 
 	sourcemaps = require('gulp-sourcemaps'), 
 	autoprefixer = require('gulp-autoprefixer'), 
 	spritesmith = require('gulp.spritesmith'),
 	imagemin = require('gulp-imagemin'),
 	livereload = require('livereload'),
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload,
 	rename = require("gulp-rename"),
  spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./app/img/sprite/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
            }));

    spriteData.img.pipe(gulp.dest('./app/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./app/scss/')); // путь, куда сохраняем стили
});

gulp.task('sass', function () {
 return gulp.src('app/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
});

gulp.task('serve',function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', ['serve', 'sass', 'sprite'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch("app/*.html").on("change", reload);
    gulp.watch('js/**/*.js').on("change", reload); // Наблюдение за JS файлами в папке js
});
