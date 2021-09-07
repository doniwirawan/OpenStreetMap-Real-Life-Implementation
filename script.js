
async function main (){
    

    function createMap(elemId, centerLat, centerLng, zoom) {
        var map = new L.Map(elemId);
        console.log(map)

        // Data provider
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';

        // Layer
        var osmLayer = new L.TileLayer(osmUrl, {
            minZoom: 4,
            maxZoom: 20,
            attribution: osmAttrib
        });

        // Map
        map.setView(new L.LatLng(centerLat, centerLng), zoom);
        map.addLayer(osmLayer);
        return map;
    }

    var map =  createMap('map', -8.4561, 115.1999, 10);


  

    markersLatLngPic = [
        {
            point: [-8.5541842, 115.2405467],
            link:"https://images.unsplash.com/photo-1560103104-4623c14a473b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            name:"1",
            desc:"1"
        },
        {
            point:[-8.4941595, 115.2355369],
            link: "https://images.unsplash.com/photo-1558005530-a7958896ec60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
            name:"2",
            desc:"2"
        },
        {
            point: [-8.6872526, 115.4328641],
            link:"https://images.unsplash.com/photo-1557093793-e196ae071479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            name:"3",
            desc:"3"
        },
        {
            point: [-8.1697395, 114.4250452],
            link:"https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            name:"4",
            desc:"4"
        },
       
      
    ];

 


    function addPopUp(map, latLng,link,name,desc) {
        var marker = L.marker(latLng).addTo(map);
        marker.bindPopup(
        `
           <div class="card " style="width: 18rem;">
               
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="${link}" class="d-block w-100" alt="${name}">
                        </div>
                        
                        
                    </div>
                    
                <div class="card-body p-0 py-2">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${desc}</p>
                    <a href="#" class="text-white btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `).openPopup();
        return marker;
    }


 

    markersLatLngPic.forEach((latLng) => {
         console.log(latLng)
         addPopUp(map, latLng.point,latLng.link,latLng.name, latLng.desc);
    });



   

}

main()


