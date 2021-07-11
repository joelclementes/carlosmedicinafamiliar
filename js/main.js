$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

new Vue({
    el: '#VueServicios',
    data:{
        servicios: []
    },
    mounted: function(){
        axios.get('../data/servicios.json')
            .then(res =>  {
                this.servicios = res.data
            })
            .catch(error => {
                console.log(error);
            });
    }
});