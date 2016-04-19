var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

var dependencies = [
    'react',
    'react-dom'
];
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('deploy', function (){
    bundleApp(true);
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.js'], ['scripts']);
});


gulp.task('default', ['scripts','watch']);

function bundleApp(isProduction) {
    scriptsCount++;
    var appBundler = browserify({
        entries: './src/app.js',
        debug: true
    })

    if (!isProduction && scriptsCount === 1){
        // create vendors.js for dev environment.
        browserify({
            require: dependencies,
            debug: true
        })
            .bundle()
            .on('error', gutil.log)
            .pipe(source('vendors.js'))
            .pipe(gulp.dest('./web/js/'));
    }
    if (!isProduction){
        dependencies.forEach(function(dep){
            appBundler.external(dep);
        })
    }

    appBundler
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error',gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./web/js/'));
}