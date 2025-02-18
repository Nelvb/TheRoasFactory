import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollAnimationWrapper = () => {
    const location = useLocation();

    useEffect(() => {
        const observeElements = () => {
            const selectors = [
                ".content",
                ".section-container",
                ".card",
                ".about-us",
                ".values-section",
                ".value-content",
                ".contact-container",
                ".contact-form",
                ".contact-options"
            ];

            if (location.pathname.startsWith("/blog/")) {
                selectors.push("article");
            } else if (location.pathname.startsWith("/blog")) {
                selectors.push(".blog-post");
            }

            const elements = document.querySelectorAll(selectors.join(", "));

            if (elements.length === 0) {
                return null;
            }

            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("fade-in");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { rootMargin: "100px 0px", threshold: 0.1 }
            );

            elements.forEach(el => observer.observe(el));
            return observer;
        };

        const waitForElements = () => {
            const elementsLoaded = () => {
                const article = document.querySelector("article");
                const otherElements = document.querySelectorAll(
                    ".content, .section-container, .card, .about-us, .values-section, .value-content, .contact-container, .contact-form, .contact-options"
                );
                return article || otherElements.length > 0;
            };

            if (elementsLoaded()) {
                return observeElements();
            } else {
                setTimeout(waitForElements, 100);
            }
        };

        let observer = waitForElements();

        const observerConfig = { childList: true, subtree: true };
        let containerSelector = location.pathname.startsWith("/blog/") ? ".main-container" : ".blog-container";
        const container = document.querySelector(containerSelector);

        if (container) {
            const mutationObserver = new MutationObserver(() => {
                observer?.disconnect();
                observer = observeElements();
            });

            mutationObserver.observe(container, observerConfig);

            return () => {
                observer?.disconnect();
                mutationObserver.disconnect();
            };
        }

        return () => observer?.disconnect();
    }, [location.pathname]);

    return null;
};

export default ScrollAnimationWrapper;
