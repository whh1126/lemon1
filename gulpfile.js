/*
 * @Author: vk 
 * @Date: 2019-02-27 14:54:37 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-02 11:45:09
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('webserver', function() {
    return gulp.src('src')
        .pipe(webserver({
            port: 9090,
            open: true,
            livereload: true,
            proxies: [{
                source: "/api/getbill",
                target: "http://localhost:3000/addbill/api/getbill"
            }, {
                source: "/api/getCurom",
                target: "http://localhost:3000/classify/api/getCurom"
            }, {
                source: "/api/addCurom",
                target: "http://localhost:3000/addclassify/api/addCurom"
            }, {
                source: "/api/seeIcon",
                target: "http://localhost:3000/seeIcon/api/seeIcon"
            }]

        }))
})
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})
gulp.task('dev', gulp.series('sass', 'webserver', 'watch'))