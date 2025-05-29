export const menuSlide = {
    initial: {y: "calc(-100% - 100px)"},
    enter: {y: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {y: "calc(-100% - 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {y: -80},
    enter: i => ({y: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i}}),
    exit: i => ({y: -80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}