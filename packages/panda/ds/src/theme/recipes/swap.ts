import { defineSlotRecipe } from "@pandacss/dev"

export const swapSlotRecipe = defineSlotRecipe({
  className: "swap",
  description:
    "Animated swap between two indicators, such as an icon that turns into another on toggle or a card that slides to the next",
  slots: ["root", "indicator"],
  base: {
    root: {
      display: "grid",
    },
    indicator: {
      gridArea: "1 / 1",
      minH: "0",
      animationDuration: "fast",
      animationTimingFunction: "ease-in-smooth",
      _motionReduce: {
        animationDuration: "0.01ms!",
      },
    },
  },
  variants: {
    variant: {
      fade: {
        indicator: {
          _open: {
            animationName: "fade-in, blur-in",
            animationDuration: "moderate",
            animationTimingFunction: "ease-out",
          },
          _closed: {
            animationName: "fade-out, blur-out",
            animationDuration: "faster",
            animationTimingFunction: "ease-in",
          },
        },
      },
      scale: {
        root: {
          "--scale-in-from": "0",
          "--scale-out-to": "0",
        },
        indicator: {
          _open: {
            animationName: "scale-in, fade-in, blur-in",
            animationDuration: "moderate",
            animationTimingFunction: "ease-out",
          },
          _closed: {
            animationName: "scale-out, fade-out, blur-out",
            animationDuration: "faster",
            animationTimingFunction: "ease-in",
          },
        },
      },
      rotate: {
        indicator: {
          _open: {
            animationName: "rotate-in, fade-in, blur-in",
            animationDuration: "moderate",
            animationTimingFunction: "ease-out",
          },
          _closed: {
            animationName: "rotate-out, fade-out, blur-out",
            animationDuration: "faster",
            animationTimingFunction: "ease-in",
          },
        },
      },
      flip: {
        root: {
          perspective: "var(--swap-perspective, 200px)",
        },
        indicator: {
          backfaceVisibility: "hidden",
          _open: {
            animationName: "flip-in, blur-in",
            animationDuration: "slower",
            animationTimingFunction: "ease-in-out",
          },
          _closed: {
            animationName: "flip-out, blur-out",
            animationDuration: "moderate",
            animationTimingFunction: "ease-in-out",
          },
        },
      },
      slide: {
        root: {
          overflow: "hidden",
        },
        indicator: {
          animationDuration: "moderate",
          "[data-direction=forward] &": {
            _open: { animationName: "slide-from-right-full" },
            _closed: { animationName: "slide-to-left-full" },
          },
          "[data-direction=backward] &": {
            _open: { animationName: "slide-from-left-full" },
            _closed: { animationName: "slide-to-right-full" },
          },
        },
      },
      stack: {
        root: {
          overflow: "hidden",
          "--scale-out-to": "0.8",
        },
        indicator: {
          animationDuration: "slower",
          "[data-direction=forward] &": {
            _open: { animationName: "slide-from-right-full", zIndex: "1" },
            _closed: { animationName: "slide-to-left, scale-out", zIndex: "0" },
          },
          "[data-direction=backward] &": {
            _open: { animationName: "slide-from-left-full", zIndex: "1" },
            _closed: { animationName: "slide-to-right, scale-out", zIndex: "0" },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "fade",
  },
})
