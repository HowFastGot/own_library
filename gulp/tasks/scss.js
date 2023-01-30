import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQuaries from "gulp-group-css-media-queries";



const sass = gulpSass(dartSass);

export const scss = () => {
     return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev, allowEmpty: true })
          .pipe(app.plugins.plumber(
               app.plugins.notify.onError({
                    title: "SCSS",
                    message: "Error: <%= error.message %>"
               })))
          .pipe(app.plugins.replace(/@img\//g, "../img/"))
          .pipe(sass({
               outputStyle: "expanded"
          }))
          .pipe(
               app.plugins.if(
                    app.isBuild,
                    groupCssMediaQuaries()
               )
          )
          .pipe(
               app.plugins.if(
                    app.isBuild,
                    webpcss(
                         {
                              webpClass: ".webp",
                              noWebpClass: ".no-webp"
                         }
                    )
               )
          )
          .pipe(autoprefixer({
               grid: true,
               overrideBrowserslist: ["last 3 version"],
               cascade: true
          }))
          // Раскоментировать если нужен НЕ сжатый дубль-файл со стилями
          .pipe(app.gulp.dest(app.path.build.css))
          .pipe(
               app.plugins.if(
                    app.isBuild,
                    cleanCss()
               )
          )
          .pipe(rename({
               extname: ".min.css"
          }))
          .pipe(app.gulp.dest(app.path.build.css))
          .pipe(app.plugins.browserSync.stream());
}