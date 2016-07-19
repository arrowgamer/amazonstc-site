var gulp = require("gulp"), 
    gulpIf = require("gulp-if"),
    doUglify = true;

gulp.task("clean", function() {
    var del = require("del");
    return del(["dist/**", "!dist"]);
});

gulp.task("sass", ['clean'], function() {
    var sass = require("gulp-sass");
    return gulp.src("src/scss/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("html", ['clean'], function() {
    var htmlmin = require("gulp-htmlmin"),
        preprocess = require("gulp-preprocess");

    return gulp.src("src/*.html")
        .pipe(preprocess({
            context: {
                assetVersion: new Date().getTime()
            }
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"));
});

gulp.task("js", ['clean'], function() {
    var concat = require("gulp-concat"),
        uglify = require("gulp-uglify");

        return gulp.src(["bower_components/jquery/dist/jquery.min.js", "src/js/**/*.js"])
            .pipe(concat("app.js"))
            .pipe(gulpIf(doUglify, uglify()))
            .pipe(gulp.dest("dist/assets/js"));
});

gulp.task('watch', function () {
    doUglify = false;

    gulp.watch("src/scss/**/*.scss", ['sass', 'html', 'js']);
    gulp.watch("src/*.html", ['sass', 'html', 'js']);
    gulp.watch("src/js/**/*.js", ['sass', 'html', 'js']);
});

gulp.task('default', ['sass', 'html', 'js']);