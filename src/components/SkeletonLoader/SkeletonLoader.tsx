import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLoader = (props: JSX.IntrinsicAttributes) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-23" y="-20" rx="3" ry="3" width="810" height="570" />
    </ContentLoader>
)

export default SkeletonLoader