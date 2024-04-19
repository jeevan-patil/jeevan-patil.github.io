
$(document).ready(function () {
    renderProducts(products);

    $('#search-box').keyup(function () { 
        searchProducts();
    });
});

function renderProducts(items) {
    $("#products-div").html('');
    $.each(items, function(i, product) {
        var prodHtml = generateView(product);
        $("#products-div").append(prodHtml);
    });
}

function searchProducts() {
    var term = $('#search-box').val().toLowerCase().trim();
    
    var searched = [];
    if(term && term.length >= 3) {
        $.each(products, function(i, product) {
            if(product.name.search(term) != -1
            || product.desc.search(term) != -1
            || product.search_term.search(term) != -1) {
                searched.push(product);
            }
        });

        if(searched.length > 0) {
            renderProducts(searched);
        }
    } else if(!term) {
        renderProducts(products);
    }
}

function generateView(product) {
    var html = "";
    html += '<div class="u-align-center u-container-style u-products-item u-repeater-item">';
    html += '<div class="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">';
    html += '<img alt="" class="u-expanded-width-xs u-image u-image-contain u-image-default u-product-control u-image-1" src="./prod/images/' + product.image + '">';
    html += '<div class="u-container-style u-grey-10 u-group u-group-1">';
    html += '<div class="u-container-layout u-container-layout-2">';
    html += '<h4 class="u-align-left u-product-control u-text u-text-3">';
    html += '<a title="remove this" class="u-product-title-link">' + product.name + '</a>';
    html += '</h4>';
    html += '<div class="u-align-left u-product-control u-product-desc u-text u-text-4">' + product.desc + '</div>';
    html += '<div class="u-align-left u-product-control u-product-price u-product-price-1">';
    html += '<div class="u-price-wrapper u-spacing-10">';
    html += '<div class="u-hide-price u-old-price"></div>';
    html += '<div class="u-price u-text-palette-3-base" style="font-weight: 100;margin-left: 0px;">' + product.price + ' / ' + product.unit + '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

var products = [
    {
        "code" : "0001",
        "name" : "Green India",
        "desc" : "Green India organic fertilizer",
        "price" : "123",
        "unit" : "kg",
        "image" : "green-india.jpeg",
        "category" : "",
        "search_term" : "green india urea"
    },
    {
        "code" : "0002",
        "name" : "CALSIPHOS",
        "desc" : "Bio NPK fertilizers",
        "price" : "12.33",
        "unit" : "ltr",
        "image" : "npk.png",
        "category" : "",
        "search_term" : "calsiphos npk bio"
    },
    {
        "code" : "0003",
        "name" : "UREA",
        "desc" : "UREA",
        "price" : "15.25",
        "unit" : "kg",
        "image" : "urea.png",
        "category" : "",
        "search_term" : "urea"
    },
    {
        "code" : "0004",
        "name" : "PANCHSHEEL",
        "desc" : "Liquid Micronutrient Fertilizer",
        "price" : "25.54",
        "unit" : "ltr",
        "image" : "green-india.jpeg",
        "category" : "",
        "search_term" : "panchsheel micronutrient liquid fertilizer"
    }
];