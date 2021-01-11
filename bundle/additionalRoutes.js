import React, { Suspense } from 'react'
import { Text, View } from 'react-native'
import { importLazy } from './utils'
let Search, PDP

export default additionalRoutes = {
    Search: {
        screen: (props) => {
            if (!Search) {
                Search = React.lazy(() => importLazy('src/apps/search/index.js').then(imported => {
                    // alert(JSON.stringify(imported))
                    return { default: imported.default }
                }))
            }
            return (
                <Suspense fallback={<Text>loading...</Text>}>
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
                PDP = React.lazy(() => importLazy('src/apps/pdp/index.js').then(imported => {
                    // alert(JSON.stringify(imported))
                    return { default: imported.default }
                }))
            }
            return (
                <Suspense fallback={<Text>loading...</Text>}>
                    <PDP navigation={props.navigation} />
                </Suspense>
            )
        },
        navigationOptions: () => ({
            title: 'PDP',
        }),
    },
}