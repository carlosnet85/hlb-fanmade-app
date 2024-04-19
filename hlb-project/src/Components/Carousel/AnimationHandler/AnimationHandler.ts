import { AnimationHandler, AnimationHandlerResponse } from "react-responsive-carousel/lib/ts/components/Carousel/types";

export const customAnimationHandler: AnimationHandler = (_props, state): AnimationHandlerResponse => {
    const transitionDuration = 'opacity 550ms, transform 800ms';
    const transitionTimingFunction = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

    let slideStyle: React.CSSProperties = {
        position: 'absolute', 
        display: 'block',
        minHeight: '100%',
        opacity: 0,
        transform: 'scale(0)',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction: transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
        slideStyle = {
            ...slideStyle,
            transition: transitionDuration,
            msTransition: transitionDuration,
            MozTransition: transitionDuration,
            WebkitTransition: transitionDuration,
            OTransition: transitionDuration,
        };
    }  

    return {
        slideStyle,
        selectedStyle: { ...slideStyle, opacity: 1, position: 'relative', transform: 'scale(1)' },
        prevStyle: { ...slideStyle }, 
    };
};