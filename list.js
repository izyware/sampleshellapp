var modtask = function(push) {
    push({
        css : 'width:100%',
        parts: {
            header: {
                css : 'theme.title1;text-align:center;width:96%;padding:2%;',
                parts : 'text',
                what : 'Product Title'
            },
            footer: {
                css : 'theme.title2;text-align:center;width:94%;padding:3%;',
                parts : 'text',
                what: 'Product Description'
            }
        }
    });
}