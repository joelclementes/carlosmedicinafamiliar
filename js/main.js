$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

new Vue({
    el: '#VueServicios',
    data:{
        services: []
    },
    mounted: function(){
        axios.get('../data/servicios.json')
            .then(res =>  {
                this.services = res.data
            })
            .catch(error => {
                console.log(error);
            });
    }
});