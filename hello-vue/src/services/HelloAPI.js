// setting up axios to make API calls, base set to API to use to direct the axios call?
import axios from 'axios'

let base = 'api'

export default {
    getHelloMessage() {
        // axios gets the API response then returns it as just data to whichever place is asking I think.
        return axios.get(base).then(response => {
            return response.data
        })
    }
}