export const source = () => {
	return app.gulp.src(app.path.src.source)
		.pipe(app.gulp.dest(app.path.build.source))
		.pipe(app.plugins.browserSync.stream());
}