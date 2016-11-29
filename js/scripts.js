// Grid View
$('#grid').click( function()
{
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('list');
    // Add ONLY 'grid' class
    $('.cd-gallery').addClass('grid');
    
    $('.cd-gallery h3').show();
    $('.cd-gallery p').show();
});


// List View
$('#list').click( function()
{
    // Remove ONLY 'list' class
    $('.cd-gallery').removeClass('grid');
    // Add ONLY 'grid' class
    $('.cd-gallery').addClass('list');
    
    $('.cd-gallery h3').hide();
    $('.cd-gallery p').hide();
});
