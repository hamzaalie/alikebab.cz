/**
 * Magic Cursor – tiny dot + bubble ring on hover
 * Uses requestAnimationFrame for zero-lag tracking
 */

class MagicCursor {
    constructor() {
        // Only run on devices with a fine pointer (desktop)
        if (!window.matchMedia("(pointer: fine)").matches) return;

        this.mouseX = -100;
        this.mouseY = -100;
        this.ringX = -100;
        this.ringY = -100;
        this.isHover = false;
        this.speed = 0.15; // ring follow speed (0-1, lower = more lag)

        this.createElements();
        this.bind();
        this.loop();
    }

    createElements() {
        this.dot = document.createElement("div");
        this.dot.id = "cursor-dot";
        document.body.appendChild(this.dot);

        this.ring = document.createElement("div");
        this.ring.id = "cursor-ring";
        document.body.appendChild(this.ring);
    }

    bind() {
        // Instant mouse tracking
        document.addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        }, { passive: true });

        // Hover targets: buttons, links, inputs
        const hoverTargets = "a, button, .btn-default, .gallery-btn, .nav-link, input, textarea, select, [role='button']";
        // Heading targets
        const headingTargets = "h1, h2, h3, h4, h5, h6, [data-cursor='-opaque']";
        // Drag targets
        const dragTargets = "[data-cursor-text]";

        document.addEventListener("mouseover", (e) => {
            const el = e.target;
            if (el.closest(dragTargets)) {
                this.ring.className = "is-drag";
            } else if (el.closest(headingTargets)) {
                this.ring.className = "is-heading";
            } else if (el.closest(hoverTargets)) {
                this.ring.className = "is-hover";
            }
        }, { passive: true });

        document.addEventListener("mouseout", (e) => {
            const el = e.target;
            if (
                el.closest(hoverTargets) ||
                el.closest(headingTargets) ||
                el.closest(dragTargets)
            ) {
                this.ring.className = "";
            }
        }, { passive: true });

        // Hide when mouse leaves the viewport
        document.addEventListener("mouseleave", () => {
            this.dot.style.opacity = "0";
            this.ring.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
            this.dot.style.opacity = "1";
        });
    }

    loop() {
        // Dot follows instantly
        this.dot.style.transform =
            `translate3d(${this.mouseX - 5}px, ${this.mouseY - 5}px, 0)`;

        // Ring follows with slight easing
        this.ringX += (this.mouseX - this.ringX) * this.speed;
        this.ringY += (this.mouseY - this.ringY) * this.speed;

        const rw = this.ring.offsetWidth;
        this.ring.style.transform =
            `translate3d(${this.ringX - rw / 2}px, ${this.ringY - rw / 2}px, 0)`;

        requestAnimationFrame(() => this.loop());
    }
}

// Expose globally
if (typeof window !== "undefined") {
    window.MagicCursor = MagicCursor;
}
