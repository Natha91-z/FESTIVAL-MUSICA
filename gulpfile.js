import { src, dest, watch } from 'gulp'
import * as darSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(darSass)

export function css ( done ) {
    src('src/scss/app.scss', {sourcemaps: true})
    .pipe( sass() .on('error', sass.logError) )
    .pipe( dest('build/css',{sourcemaps: true}))
    done()
}

export function dev() {
    watch('src/scss/**/*.scss', css)
}

