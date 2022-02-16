var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var csso = require('gulp-csso');
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var del =  require("del");
var jsmin = require('gulp-jsmin');
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var imagemin = require("gulp-imagemin");

gulp.task("css", function() {
	return gulp.src("source/less/style.less")
    	.pipe(plumber())
    	.pipe(sourcemap.init())
    	.pipe(less())
      .pipe(postcss([
        autoprefixer()
      ]))
    	.pipe(csso())
    	.pipe(rename("style-min.css"))
    	.pipe(sourcemap.write("."))
    	.pipe(gulp.dest("build/css"))
    	.pipe(server.stream());
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/*.ico",
    "source/css/owl.carousel.min.css"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("js", function () {
  return gulp.src('source/js/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/js'));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});



gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "js",
  "html",
  "images"
));

gulp.task("start", gulp.series("css", "server"));

gulp.task("refresh", function (done) {
  server.reload();
  done();
});