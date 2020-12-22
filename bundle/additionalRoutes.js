import React, { Suspense } from 'react'
import { importLazy } from './utils'
let Search, PDP

export default additionalRoutes = {
    Search: {
        screen: (props) => {
            if (!Search) {
                Search = React.lazy(() => importLazy('../src/apps/search').then(imported => {
                    return { default: imported.default }
                }))
            }
            return (
                <Suspense fallback={null}>
                    <Search navigation={props.navigation} />
                </Suspense>
            )
        },
        navigationOptions: () => ({
            title: 'Search',
        }),
    },
    PDP: {
        screen: (props) => {
            if (!PDP) {
                PDP = React.lazy(() => importLazy('../src/apps/pdp').then(imported => {
                    return { default: imported.default }
                }))
            }
            return (
                <Suspense fallback={null}>
                    <PDP navigation={props.navigation} />
                </Suspense>
            )
        },
        navigationOptions: () => ({
            title: 'PDP',
        }),
    },
}