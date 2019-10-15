'use strict';

// sass
var gulp        = require('gulp'),
sass 				= require('gulp-sass'),
sourcemaps  = require('gulp-sourcemaps'),

// browsersync
browserSync = require('browser-sync'),
reload      = browserSync.reload,

// svg
svgstore    = require('gulp-svgstore'),
svgmin      = require('gulp-svgmin'),

// js
concat = require('gulp-concat'),
uglify = require('gulp-uglifyjs'),
ngmin = require('gulp-ngmin');

gulp.task('sass', function () {
	gulp.src('assets/sass/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist/css'))
	.pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {

	browserSync({
		watchTask: true,
		proxy: 'localhost/portfolio'
	});

});

// Reload all Browsers
gulp.task('bs-reload', function () {
	browserSync.reload();
});

// SVG
gulp.task('svgstore', function () {
	return gulp
	.src('dist/svg-icons/icons/*.svg')
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
	.pipe(svgstore())
	.pipe(gulp.dest('dist/svg-icons'));
});

gulp.task('uglify',['concat'], function() {
	gulp.src('dist/js/main.js')
	.pipe(uglify('main.min.js'))
	.pipe(gulp.dest('dist/js'))
});

gulp.task('concat', function() {
	return gulp.src([
		'bower_components/angular/angular.min.js',
		'bower_components/angular-route/angular-route.min.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'app.js',
		'routes.js',
		'common/**/*.js',
		'home/filters/*.js',
		'home/controllers/*.js',
		'contact/controllers/*.js'
		])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js'))
});

gulp.task('watch', ['sass', 'browser-sync'], function () {
	gulp.watch(["assets/sass/**/*.scss"], ['sass']);
	gulp.watch("*.php", ['bs-reload']);
	// gulp.watch("**/*.js", ['concat', 'uglify']);
});


