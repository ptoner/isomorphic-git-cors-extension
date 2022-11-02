import { merge } from 'webpack-merge'
import common from './webpack.common'

let mainConfigs:any[] = []


export default async () => {
    let configs = await common()

    // let configs = await common(config.hostname, config.baseURL, config.largeURL, config.ipfsCid, config.marketplaces, 35)

    for (let config of configs) {
        //@ts-ignore
        mainConfigs.push(merge(config, {
            //@ts-ignore
            mode: 'production'
        }))
    }
    
    return mainConfigs

}
