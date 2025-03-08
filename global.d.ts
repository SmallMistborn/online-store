declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.svg?react" {
    import React from "react";
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}