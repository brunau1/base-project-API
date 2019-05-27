import application from './app'
import config from '../configurations/config'

application.listen(config.port, () => {
    console.log("server listening on port "+config.port+"...")
})