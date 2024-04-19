
$(document).ready(function () {
    renderProducts();
});



function renderProducts() {
    for (var i = 0; i < products.length; i++){
        var product = products[i];
        var prodHtml = generateView(product);
        $("#products-div").append(prodHtml);
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
        "code" : "",
        "name" : "Green India",
        "desc" : "Green India organic fertilizer",
        "price" : "123",
        "unit" : "kg",
        "image" : "green-india.jpeg",
        "category" : "",
        "search_term" : ["green", "india", "urea"]
    },
    {
        "code" : "",
        "name" : "CALSIPHOS",
        "desc" : "Bio NPK fertilizers",
        "price" : "12.33",
        "unit" : "ltr",
        "image" : "npk.png",
        "category" : "",
        "search_term" : ["CALSIPHOS", "npk", "bio"]
    },
    {
        "code" : "",
        "name" : "UREA",
        "desc" : "UREA",
        "price" : "15.25",
        "unit" : "kg",
        "image" : "urea.png",
        "category" : "",
        "search_term" : ["urea"]
    },
    {
        "code" : "",
        "name" : "PANCHSHEEL",
        "desc" : "Liquid Micronutrient Fertilizer",
        "price" : "25.54",
        "unit" : "ltr",
        "image" : "green-india.jpeg",
        "category" : "",
        "search_term" : ["PANCHSHEEL", "Micronutrient", "Liquid", "Fertilizer"]
    }
];