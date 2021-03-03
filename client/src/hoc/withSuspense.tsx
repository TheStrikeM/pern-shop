import React from 'react';

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => (
        <React.Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent {...props} />
        </React.Suspense>
    )
}
