import appServer from './app'
import { config } from '../configurations/config'

appServer.listen(config.port, () => {
    console.log("server listening on port"+config.port+"...")
})