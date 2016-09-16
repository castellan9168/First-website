var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('copy-compile-less', function () {

	return gulp.src("assets/less/cukiernia_main.less")
		.pipe(less({
			paths: [__dirname]
		}))
		.on('error', function (e) {
			console.log(e);
		})
		.pipe(gulp.dest("app/"));
});

gulp.task('default', function () {
	return gulp.task('copy-compile-less');
});

gulp.task('watch', function () {
	gulp.watch("assets/less/**/*.less", ['copy-compile-less']);
});