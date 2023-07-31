declare module "react-element-popper" {
  import React from "react";

  interface ElementPopperProps {
    ref?: React.RefObject<any>;
    /**
     * Refrence element
     */
    element: React.ReactElement;
    /**
     * Popper element
     */
    popper?: React.ReactElement;
    /**
     * Enter `true` if you want to use a built-in arrow.
     *
     * Or enter you're component to render it as an arrow.
     *
     * @example
     *
     * <ElementPopper
     *  element={<RefrenceComponent/>}
     *  popper={<PopperComponent/>}
     *  arrow
     * />
     *
     * <ElementPopper
     *  element={<RefrenceComponent/>}
     *  popper={<PopperComponent/>}
     *  arrow={<ArrowComponent/>}
     * />
     */
    active?: boolean;
    arrow?: boolean | React.ReactElement;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    arrowStyle?: React.CSSProperties;
    arrowClassName?: string;
    fixMainPosition?: boolean;
    fixRelativePosition?: boolean;
    offsetY?: number;
    offsetX?: number;
    animations?: Function[];
    /**
     * Availble positions:
     *
     *   - top or top-center
     *   - bottom or bottom-center
     *   - left or left-center
     *   - right or right-center
     *   - top-start or top-left
     *   - bottom-start or bottom-left
     *   - left-start or left-top
     *   - right-start or right-top
     *   - top-end or top-right
     *   - bottom-end or bottom-right
     *   - left-end or left-bottom
     *   - right-end or right-bottom
     *
     */
    position?: string;
    /**
     * default z-index = 0
     */
    zIndex?: number;
    popperShadow?: boolean;
    portal?: boolean;
    portalTarget?: HTMLElement;
    onChange?(data: {
      popper: {
        top: number;
        bottom: number;
        left: number;
        right: number;
        height: number;
        width: number;
      };
      element: {
        top: number;
        bottom: number;
        left: number;
        right: number;
        height: number;
        width: number;
      };
      arrow: {
        top: number;
        bottom: number;
        left: number;
        right: number;
        height: number;
        width: number;
        direction: string;
      };
      position: string;
      scroll: {
        scrollLeft: number;
        scrollTop: number;
      };
      scrollableParents: HTMLElement[];
    }): void;
  }

  export default function ElementPopper(
    props: ElementPopperProps
  ): React.ReactElement;
}

declare module "react-element-popper/animations/transition" {
  type data = {
    /**
     * @default 12
     */
    from?: number;
    /**
     * @default 400
     */
    duration?: number;
    transition?: string;
  };

  export default function transition(props?: data): Function;
}

declare module "react-element-popper/animations/opacity" {
  type data = {
    /**
     * @default 0
     */
    from?: number;
    /**
     * @default 1
     */
    to?: number;
    /**
     * @default 400
     */
    duration?: number;
  };

  export default function opacity(props?: data): Function;
}

declare module "react-element-popper/animations/size" {
  type data = {
    /**
     * @default 0
     *
     * numbers between 0 to 100
     */
    from?: number;
    /**
     * @default 1
     */
    duration?: number;
  };

  export default function size(props?: data): Function;
}
