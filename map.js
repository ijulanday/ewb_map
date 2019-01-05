//constants and resources
var sanCarlosPos = {lat: 33.361530, lng: -110.525661}
var sanCarlosInfo = "We're helping the Nalwoodi Denzhone Community (NDC) turn 93-acre agricultural property into a diversion center for struggling youth."
var sanCarlosLink = 'http://ewb-ua.weebly.com/san-carlos-arizona-usa.html'

var sabanaMulaPos = {lat: 19.038089, lng: -71.566573}
var sabanaMulaInfo = "We're helping the Sabana Mula community improve their irrigation and become more economically self-sufficient."
var sabanaMulaLink = 'http://ewb-ua.weebly.com/sabana-mula-dominican-republic.html'

function getInfoWindowContent(title, bodytext, link) {
    return    '<div>' 
            + '<h1 style="font-family:verdana;">'
            +    title
            + '</h1>'
            + '<p style="font-family:verdana;">'
            +    bodytext
            + '</p>'
            + '<a style="font-family:verdana;" href="' + link + '">' 
            +   '<i>Click to learn more</i>'
            + '</a>'
            + '</div>'
}

function initMap() {
    var mapProp= {
      center:new google.maps.LatLng(29.923358, -89.813784),
      zoom:3,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp)
    
    var sanCarlosMarker = new google.maps.Marker({
        position: sanCarlosPos,
        map: map,
        title: 'San Carlos, AZ'
    })

    var sabanaMulaMarker = new google.maps.Marker({
        position: sabanaMulaPos,
        map: map,
        title: 'Sabana Mula, Dominican Republic'
    })

    var sanCarlosWindow = new google.maps.InfoWindow({
        content: getInfoWindowContent('San Carlos, Arizona', sanCarlosInfo, sanCarlosLink)
    });

    var sabanaMulaWindow = new google.maps.InfoWindow({
        content: getInfoWindowContent('Sabana Mula, Dominican Republic', sabanaMulaInfo, sabanaMulaLink)
    });

    sanCarlosMarker.addListener('click', function() {
        sanCarlosWindow.open(map, sanCarlosMarker)
    })
    
    sabanaMulaMarker.addListener('click', function() {
        sabanaMulaWindow.open(map, sabanaMulaMarker)
    })
}