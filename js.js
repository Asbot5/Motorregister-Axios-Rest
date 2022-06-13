const baseUrl = 'https://v1.motorapi.dk'

Vue.createApp({
    data() {
        return {
            Id: '',
            Car: null,
            optionsTitle: {
                method: 'GET',
                headers: {
                  'X-AUTH-TOKEN': 'pf9xh5cndfxxkxkshs94uwrellpt2xf3'
                }
            },
        }
    },
    methods: {
        async GetVehicle() {
            const response = await axios.get(baseUrl + '/vehicles/' + this.Id, this.optionsTitle)
            this.Car = await response.data
            console.log(response.data)
        }
    }
}).mount("#app")