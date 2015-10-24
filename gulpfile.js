var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel({optional: ['runtime']}))
        .pipe(gulp.dest('dist'));
});

gulp.task('babel:watch', function () {
    return gulp.watch('src/**/*.js',['babel'])
});

gulp.task('default',['babel','babel:watch'] );