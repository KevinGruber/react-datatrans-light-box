
import styles from './styles'

export const filterProps = (props, reject) => {
    const newProps = {...props}
    reject.forEach(key => delete newProps[key])
    return newProps
    // return Object
    // .keys(props)
    // .reduce((acc, key) => reject.includes(key) ? acc : set(acc, key, props[key]), {})
}

export const set = (target, key, value) => {
    target[key] = value
    return target
}
export const toUrlParams = props => Object.keys(props)
    .map(key => `${key}=${props[key]}`)
.join('&')


export const parseUrl = url => {
    const a = document.createElement('a')
    a.href = url
    return a
}

export const lockScrolling = () => {
    var element = document.createElement('style')
    element.innerHTML = styles.scrollLock
    element.id = 'scroll-lock'

    document.getElementsByTagName('head')[0].appendChild(element)
}

export const releaseLock = () => {
    const element = document.getElementById('scroll-lock')
    if(element) element.outerHTML = ''
}
