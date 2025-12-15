'use client';

import { useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook that triggers CSS animations when an element enters the viewport
 * Uses Intersection Observer API for performance
 * 
 * @param options - Configuration options for the intersection observer
 * @returns ref - Ref to attach to the element you want to animate
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    options: ScrollAnimationOptions = {}
): RefObject<T | null> {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
        triggerOnce = true,
    } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');

                        // Unobserve after first trigger if triggerOnce is true
                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!triggerOnce) {
                        entry.target.classList.remove('is-visible');
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return ref;
}

/**
 * Hook for animating multiple children with staggered delays
 * 
 * @param childCount - Number of children to animate
 * @param options - Configuration options for the intersection observer
 * @returns ref - Ref to attach to the parent container
 */
export function useStaggeredAnimation<T extends HTMLElement = HTMLDivElement>(
    childCount: number,
    options: ScrollAnimationOptions = {}
): RefObject<T | null> {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
        triggerOnce = true,
    } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const children = Array.from(entry.target.children);

                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('is-visible');
                            }, index * 100); // 100ms stagger delay
                        });

                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(container);

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, [childCount, threshold, rootMargin, triggerOnce]);

    return ref;
}
