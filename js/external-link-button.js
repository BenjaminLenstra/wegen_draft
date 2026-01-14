// Configuration for the external link button
var externalLinkConfig = {
    url: 'https://example.com',  // Change this to your desired URL
    backgroundColor: '#fff',      // Button background color
    icon: 'fas fa-external-link-alt'  // FontAwesome icon class
};

// Create the external link button control
L.Control.ExternalLinkButton = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar external-link-control');
        
        var link = L.DomUtil.create('a', '', container);
        link.href = externalLinkConfig.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.title = 'Open external link';
        link.style.backgroundColor = externalLinkConfig.backgroundColor;
        link.style.width = '30px';
        link.style.height = '30px';
        link.style.lineHeight = '30px';
        link.style.display = 'block';
        link.style.textAlign = 'center';
        link.style.textDecoration = 'none';
        link.style.color = '#333';
        
        var icon = L.DomUtil.create('i', externalLinkConfig.icon, link);
        icon.style.fontSize = '14px';
        
        // Prevent map interaction when clicking the button
        L.DomEvent.disableClickPropagation(container);
        
        return container;
    }
});

// Factory function to create the control
L.control.externalLinkButton = function(opts) {
    return new L.Control.ExternalLinkButton(opts);
};
