'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest('./css'))
});

gulp.task('css', function() {
	return gulp.src('./css/**/*.css')
		.pipe(clean())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['sass', 'css', 'watch']);