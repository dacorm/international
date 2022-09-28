import React from "react"
import ContentLoader from "react-content-loader";
import styles from './SkeletonLoader.module.css';

const SkeletonLoader = (props: JSX.IntrinsicAttributes) => (
    <ContentLoader
        speed={2}
        width={810}
        height={570}
        viewBox="0 0 810 570"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-23" y="-20" rx="3" ry="3" width="810" height="570"/>
    </ContentLoader>
)

export default SkeletonLoader