import { merge } from 'webpack-merge'
import path from 'path'
import common from './webpack.common'

let mainConfigs = []


export default async () => {

    let configs = await common()

    for (let config of configs) {
        //@ts-ignore
        mainConfigs.push(merge(config, {
            //@ts-ignore
            mode: 'development',
            //@ts-ignore
            devtool: 'source-map',
            watch: true
    
        }))
    }
        
    return mainConfigs
}
